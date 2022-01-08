import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements 
//CanActivate,
 CanLoad {

  constructor(private authService: AuthService){

  }
  //canActivate(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  return true;
  //}

  //para ver si puede cargar un módulo.
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      console.log('canLoad', true);
      console.log(route);
      console.log(segments);
    
    if (this.authService.auth.id){
      console.log('Permite mostrar página');
      return true;
    }
    console.log('Guadar bloqueado');
    return false;
    
  }
}
