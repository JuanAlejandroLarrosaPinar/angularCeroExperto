import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
  
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );

  }

  deleteHeroe(heroe:any){
    console.log(heroe);
    const index =this.heroes.indexOf(heroe);
    this.heroes.splice(index, 1);
  }

}
