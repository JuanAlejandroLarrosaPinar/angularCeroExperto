import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//INI Cambiar el local de la app
import localEs from "@angular/common/locales/es";
import localFr from "@angular/common/locales/fr";
import {registerLocaleData} from "@angular/common";
registerLocaleData(localEs);
registerLocaleData(localFr);
//FIN Cambiar el local de la app
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule
    
    
    
  ],
  providers: [{
    //INI Cambiar el local de la app
    provide: LOCALE_ID, 
    useValue: "es"

    //FIN Cambiar el local de la app
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
