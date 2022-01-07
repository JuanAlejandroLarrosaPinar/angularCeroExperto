import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interface/Heroe';
import { HeroesService } from '../../services/heroes.service';
import {switchMap  } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    id:'',
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
  }

  edicion: boolean=false;

  constructor(private heroeService: HeroesService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    if(this.router.url.includes('editar')){
      this.activatedRoute.params.pipe(
        switchMap(({id})=>this.heroeService.obtenerHeroe(id))
      ).subscribe(h=>
       {
         this.heroe=h;
         this.edicion=true;
       }
      )
    }else{
      return ;
    }
    
      
    
   }

  ngOnInit(): void {
  }

  guardar(){
    if(this.edicion){
      //no existe edición en server
      this.heroeService.actualizarHeroe(this.heroe).subscribe(
        resp=>{
          console.log(resp);
        },
        error=>{
          console.log(error);
        }
      );
    }else{
      this.heroeService.agregarHeroe(this.heroe).subscribe(
        resp=>{
          console.log(resp);
        },
        error=>{
          console.log(error);
        }
      );
    }
    
  }

}
