import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `img{
      width:50px;
      height:50px;
    }`
  ],
})
export class VerPaisComponent implements OnInit {

  pais!: Country; //Con ! le estamos diciendo que pais puede ser nulo.

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) {
    
   }

  ngOnInit(): void {
    //para subscribirnos a cualquier cambio de url
    //1ª Forma
    /*this.activatedRoute.params.
    subscribe(({id})=>{
      console.log(id);
      this.paisService.getPaisPorCodigo(id).
      subscribe(pais=>{
        console.log(pais);
      })
    })*/
    //2ª Forma
    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.paisService.getPaisPorCodigo(id)),
      tap(resp=>console.log)
    ).subscribe(resp =>{
      console.log(resp);
      this.pais = resp;
      console.log(39);
      console.log(this.pais);
      //console.log(this.pais.flags.png);
    });
  }

}
