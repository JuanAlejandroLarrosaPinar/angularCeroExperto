import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private _baseUrl: string = 'https://restcountries.com/v3.1/';
  private _regiones : string[] = ['Africa', 'Americas', 'Asia','Europe', 'Oceania'];
  

  get regiones(): string[]{
    return [...this._regiones];
  }
  constructor(private http: HttpClient) {}

  getPaisesPorRegion(region: string): Observable<PaisSmall[]>{
    return this.http.get<PaisSmall[]>(`${this._baseUrl}/region/${region}/?fields=cca3,name`);
  }

  getPaisPorCodigo(codigo: string) : Observable<Pais[] | any>{
    if(!codigo){
      return of(null);
    }
    return this.http.get<Pais[]>(`${this._baseUrl}/alpha/${codigo}`);
  }

  getPaisPorCodigoSmall( codigo: string): Observable<PaisSmall>{
    return this.http.get<PaisSmall>(`${this._baseUrl}/alpha/${codigo}/?fields=cca3,name`);
  }

  getPaisesPorCodigos(pais: Pais[]): Observable<PaisSmall[]>{
    if(!pais || pais.length===0){
      return of([]);
    }
    
    if(!pais[0].borders){
      return of([]);
    }
    const peticiones: Observable<PaisSmall>[] = [];
    pais[0].borders.forEach(codigo=>{
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(
      peticiones
    );
  }




}
