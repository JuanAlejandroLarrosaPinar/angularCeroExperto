import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string= '';
  paises!: Country[];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    let ultimaBusqueda = localStorage.getItem('ultimaBusqueda');
    if(ultimaBusqueda!==''){
      this.paises = JSON.parse(ultimaBusqueda!);
    }
    let regionActiva = localStorage.getItem('regionActiva');
    if(regionActiva!==''){
      this.regionActiva = regionActiva!;
    }
  }

  getClaseCSS(region: string): string{
    if(region===this.regionActiva){
      return 'btn btn-primary';
    }
    return 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    this.regionActiva =region;
    //TODO: Hacer el llamado al servicio para traer paises por esta región
    this.paisService.buscarRegion(region).subscribe(paises=>{
      console.log(paises);
      this.paises = paises;
      localStorage.setItem('ultimaBusqueda',JSON.stringify(this.paises));
      localStorage.setItem('regionActiva',this.regionActiva);
    });
  }

}
