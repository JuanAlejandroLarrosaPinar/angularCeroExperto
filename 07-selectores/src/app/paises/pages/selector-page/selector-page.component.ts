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
    'pais': ['', Validators.required,]
  });

  regiones: string[]=[];
  paises: PaisSmall[]=[];

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
        }),
        switchMap(region=> this.paisesService.getPaisesPorRegion(region))
      ).
      
      subscribe(
        paises=>this.paises=paises
      )
  }

  guardar(){
    console.log('Submit');
  }
 

}
