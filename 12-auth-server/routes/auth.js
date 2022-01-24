const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//crear nuevo usuario
router.post('/new', [
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').isLength({min:6}),
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    validarCampos

],crearUsuario);

//login usuario.
router.post('/', [
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').isLength({min:6})
],loginUsuario);

//validar y renovar token
router.get('/renew', validarJWT,revalidarToken);

module.exports = router;