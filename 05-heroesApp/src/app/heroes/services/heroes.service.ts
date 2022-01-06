import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interface/Heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL: string = environment.urlBase ;
  constructor(private http: HttpClient) { }

  obtenerHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.URL}/heroes`);
  }

  obtenerHeroe(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.URL}/heroes/${id}`);
  }

  getSugerencias( termino: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.URL }/heroes?q=${ termino }&_limit=6`);
  }
}
