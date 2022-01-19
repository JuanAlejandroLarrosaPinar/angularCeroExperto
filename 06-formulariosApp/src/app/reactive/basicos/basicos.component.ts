import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /*miFormulario: FormGroup= new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl('0'),
    existencias: new FormControl('0')
  });*/

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',
             [Validators.required,
              Validators.minLength(3)
             ]
            ], //valor inicial, validaciones (sincronas) y validaciones asíncronas
    precio: [0,
             [Validators.required,
              Validators.min(0)
             ]
            ],
    existencias:[0,
                 [Validators.required,
                  Validators.min(0)
                 ]
                ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /*this.miFormulario.setValue({
      nombre:'RTX 4080ti',
      precio: 1600,
      existencias:10
    })*/
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
     && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return ;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset({
      nombre:'',
      precio: 0,
      existencias:0
    });
  }

}
