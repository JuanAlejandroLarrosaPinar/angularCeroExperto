import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
    `.tarjeta{
      margin:5px
    }`
  ]
})
export class BasicosComponent {

  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'fErnAndo hErRERa';

  fecha: Date = new Date();
  

  
  

}
