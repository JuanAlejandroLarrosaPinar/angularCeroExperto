import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //para luego inyectar este componente con <app-root></app-root>
  templateUrl: './app.component.html', //para indicar el fichero html
  styleUrls: ['./app.component.css'] //para indicar la hoja de estilos.
})
export class AppComponent {
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
