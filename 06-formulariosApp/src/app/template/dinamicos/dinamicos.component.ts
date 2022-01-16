import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito{
  id:number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona : Persona={
    nombre:'Aelajndro',
    favoritos:[
      {id:1, nombre:'Metal gear'},
      {id:2, nombre:'Spider man'}
    ]
  }

  nuevoJuego:string='';

  agregarJuego(){
    const nuevoFavorito: Favorito={
      nombre:this.nuevoJuego,
      id:this.persona.favoritos.length+1
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Formulario posteado');
    
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  }

}
