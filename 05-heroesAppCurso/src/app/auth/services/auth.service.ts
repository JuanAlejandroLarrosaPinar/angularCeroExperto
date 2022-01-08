import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string=environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http: HttpClient) { }

  get auth(){
    return {...this._auth!}
  }

  login(): Observable<Auth>{
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).
    pipe(tap(resp=>{
      console.log(resp);
      this._auth = resp;
      localStorage.setItem('token', resp.id);
    }
      
    ));
      //tap sirve para generar efectos secundarios.
  }

  logout(){
    this._auth=undefined;
  }

  verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).
    pipe(
      map(auth=>{
        console.log('map', auth);
        this._auth=auth;
        return true;
      })
    )
  }
}
