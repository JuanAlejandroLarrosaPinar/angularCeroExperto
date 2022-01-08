import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl: string=environment.baseUrl;
  login(): Observable<Auth>{
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`);
  }
}
