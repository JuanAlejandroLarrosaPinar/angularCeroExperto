import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNumber: number= 123124.234;
  porcentaje: number=0.48;
  constructor() { }

  ngOnInit(): void {
  }

}
