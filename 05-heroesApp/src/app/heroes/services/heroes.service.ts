import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/Heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  obtenerHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.URL}/heroes`);
  }
}
