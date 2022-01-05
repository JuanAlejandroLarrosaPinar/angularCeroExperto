import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //personajes: Personaje[]=[];

  cambiarNombre(event: any){
    console.log(event.target.value);
  }

  agregarNuevoPersonaje(personaje: Personaje){
    console.log('Main page component');
    console.log(personaje);
    //this.personajes.push(personaje);
    
  }

  /*get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }*/

  constructor(/*private dbzService: DbzService*/){
    //this.personajes = dbzService.personajes; //la eliminamos
  }



}
