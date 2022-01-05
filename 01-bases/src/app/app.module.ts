import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent //cuando creamos un componente tenemos que definirlo en el modulo al que pertenece. Se comentó porque se llevó al módulo ContadorModule
    
  ],
  imports: [
    BrowserModule, //otros módulos
    HeroesModule,
    ContadorModule,
    DbzModule

  ],
  providers: [], //para servicios
  bootstrap: [AppComponent] //este es el principal componente.
})
export class AppModule { }
