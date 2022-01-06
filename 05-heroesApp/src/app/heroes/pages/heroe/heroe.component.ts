import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interface/Heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    ` img {
      width: 100%;
      border-radius: 5px;
    }
`
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  constructor(private activatedRouter: ActivatedRoute
    ,private heroeService: HeroesService, private router: Router) {
    activatedRouter.params.subscribe(
      ({id})=>{
        this.heroeService.obtenerHeroe(id).subscribe(h=>{
          console.log(h);
          this.heroe = h;
        })
      }
    );
   }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['/heroe/listado']);
  }

}
