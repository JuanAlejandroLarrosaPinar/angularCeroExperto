import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  
  
  @Input() nuevo:Personaje={
    nombre:'Maestro koroshi',
    poder:10
  };

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //agregar(event: any){
  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return ;
    }

    //event.preventDefault();
    console.log('Heey...');
    //console.log(event);
    console.log(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo ={
      nombre:'', poder:0
    };
  }

  constructor(private dbzService: DbzService){

  }
}