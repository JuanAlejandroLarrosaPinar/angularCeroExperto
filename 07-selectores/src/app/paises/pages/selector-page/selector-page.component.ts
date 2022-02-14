import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesServiceService } from '../../services/paises-service.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    'region': ['',Validators.required,],
    'pais': ['', Validators.required,],
    'frontera': ['', Validators.required,]
  });

  regiones: string[]=[];
  paises: PaisSmall[]=[];
  fronteras: string[]=[];

  cargando : Boolean =false;

  constructor(private fb: FormBuilder, private paisesService: PaisesServiceService) { }
  
  ngOnInit(): void {
      this.regiones = this.paisesService.regiones;

      //Cuando cambie
      /*this.miFormulario.get('region')?.valueChanges.subscribe(region=>{
        console.log(region);
        
        this.paisesService.getPaisesPorRegion(region).subscribe(paises=>{
          this.paises=paises;
        });
      })*/

      this.miFormulario.get('region')?.valueChanges.
      pipe(
        tap((_)=>{ //con _ indicamos que no nos interes lo que venga ahi
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap(region=> this.paisesService.getPaisesPorRegion(region))
      ).subscribe(
        paises=>{
          this.paises=paises;
          this.cargando = false;
        }
      );

      this.miFormulario.get('pais')?.valueChanges.
      pipe(
        tap((_)=>{
          this.fronteras=[];
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap(codigo=>this.paisesService.getPaisPorCodigo(codigo))
      ).
      subscribe(p=>{
        if(p!=undefined ){
          if(p[0].borders!=undefined && p[0].borders.length>0)
          this.fronteras = p[0].borders;
        }
        this.cargando = false;
      });
  }

  guardar(){
    console.log('Submit');
  }
 

}
