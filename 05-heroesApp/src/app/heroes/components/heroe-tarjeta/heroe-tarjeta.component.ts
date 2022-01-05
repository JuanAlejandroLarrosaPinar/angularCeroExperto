import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/Heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
