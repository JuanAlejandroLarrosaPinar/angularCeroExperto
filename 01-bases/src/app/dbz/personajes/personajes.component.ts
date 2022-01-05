import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  /*estos personajes van a venir desde el componente padre
  desde el fichero main-page.component.html, que es el que tiene
  <app-personajes [data]="personajes"></app-personajes
  "*/
  //@Input() personajes: Personaje[]=[]; 

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService){

  }

}
