import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
//import { catchError, of, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1';///name/spa
  private apiUrl2= 'https://restcountries.com/v2';
  
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url =`${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url)
    /*.pipe(
      catchError(err=> of(['Hola mundo'])) // si se produce una excepción, se devuelve un array con 'Hola mundo'
    
    );*/
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url)
  }

  getPaisPorCodigo(id: string): Observable<Country>{
    const url = `${this.apiUrl2}/alpha/${id}`;
    console.log(url);
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{
    /*const httpParams = new HttpParams().set('fields','name;capital;alpha2code;flag;population');
    
    const url = `${this.apiUrl}/region/${region}`;
    console.log(url);
    return this.http.get<Country[]>(url,{
      params:httpParams
    });*/
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
