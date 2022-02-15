import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Pagina1Component from './pagina1/pagina1.component';
import { MuestraNombreComponentComponent } from './muestra-nombre-component/muestra-nombre-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    MuestraNombreComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
