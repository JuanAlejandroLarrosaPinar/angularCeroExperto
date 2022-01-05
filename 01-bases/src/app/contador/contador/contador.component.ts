import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1><!--Aquí podemos meter código javascript-->
        <button (click)="acumular(base)">+{{base}}</button><!--los eventos van entre parentesis-->
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">{{-base}}</button>
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number=5;
  
    sumar(){ //se sustituye por acumular
      this.numero++; //tenemos que usar el this sí o sí.
    }
  
    restar(){ //se sustituye por acumular
      this.numero--;
    }
    
    acumular(valor: number){
      this.numero+=valor;
    }
}