const {Router} = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

//crear nuevo usuario
router.post('/new', crearUsuario);

//login usuario.
router.post('/', loginUsuario);

//validar y renovar token
router.post('/renew',revalidarToken);

module.exports = router;