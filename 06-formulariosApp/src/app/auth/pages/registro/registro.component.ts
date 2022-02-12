import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['dd',[ Validators.required, this.validatorService.noPuedeSerStrider], ]
  });

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'alejandro larrosa',
      email:'pepe',
      username:'hola'
    });
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
