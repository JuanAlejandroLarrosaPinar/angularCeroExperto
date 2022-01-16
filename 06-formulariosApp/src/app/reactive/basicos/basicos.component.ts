import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    nombre: ['RTX 4080ti'], //valor inicial, validaciones y validaciones asíncronas
    precio: [0],
    existencias:[0]
  });




  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

}
