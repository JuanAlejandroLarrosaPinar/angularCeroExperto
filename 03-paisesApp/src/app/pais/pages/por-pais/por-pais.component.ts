import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string= '';
  hayError: boolean=false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  mostrarSugerencias:boolean=false;

  

  constructor(private paisService: PaisService) {

   }

  ngOnInit(): void {
  }

  buscar(termino: string): void{
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe(
      paises=>{
        console.log(paises)
        this.hayError=false;
        this.paises = paises;
        this.mostrarSugerencias=false;
      }, (err)=>{
        console.log(err);
        this.hayError = true;
        this.paises = [];
      },
    );
  }

  sugerencias(termino: string){
    this.hayError=false;
    //TODO: Crear sugerencias
    this.paisService.buscarPais(termino).subscribe(
      paises=>{
        this.paisesSugeridos = paises.splice(0,10);
        this.termino = termino;
        this.mostrarSugerencias = true;
      },
      err =>{
        this.paisesSugeridos = [];
      }
    );
  }

  buscarSugerido(){
    this.buscar(this.termino);
    this.mostrarSugerencias=false;
  }

}
