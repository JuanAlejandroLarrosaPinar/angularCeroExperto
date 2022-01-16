import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    DinamicosComponent,
    BasicosComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  
  imports: [
    CommonModule,
    FormsModule, //esto hace que el submit no haga el refresh de la página
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
