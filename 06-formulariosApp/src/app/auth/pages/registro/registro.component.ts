import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
//import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
 
  

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidatorService]],
    username: ['',[ Validators.required, this.validatorService.noPuedeSerStrider, ],],
    password: ['', [Validators.required, Validators.minLength(6)],],
    password2: ['ee', [Validators.required]],

  },{
    validators:[
      this.validatorService.camposIguales('password', 'password2')
    ]
  });


  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors!=null && errors['required']){
      return 'El email es obligatorio';
    }
    if(errors!=null && errors['pattern']){
      return 'El patrón no es correcto';
    }
    if(errors!=null && errors['emailTomado']){
      return 'El email ya fue asignado';
    }
    
    return '';
  }

  get usernameErrorMsg(): string{
    const errors = this.miFormulario.get('username')?.errors;
    if(errors!=null && errors['required']){
      return 'El username es obligatorio';
    }
    if(errors!=null && !errors['noStrider']){
      return 'El username no puede ser strider';
    }
    
    return '';
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      //nombre:'alejandro larrosa',
      //email:'pepe',
      //username:'hola',
      //password:'a',
      //password2:'a',
    });
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched;
  }

  /*
  emailRequired(){
    const touched = this.miFormulario.get('email')?.touched;
    const errors = this.miFormulario.get('email')?.errors;
    if(errors!=null){
      return touched && errors['required'];
    }
  }

  emailFormato(){
    const touched = this.miFormulario.get('email')?.touched;
    const errors = this.miFormulario.get('email')?.errors;
    if(errors!=null){
      return touched && errors['pattern'];
    }
  }

  emailTomado(){
    const touched = this.miFormulario.get('email')?.touched;
    const errors = this.miFormulario.get('email')?.errors;
    if(errors!=null){
      return touched && errors['emailTomado'];
    }
  }*/

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
