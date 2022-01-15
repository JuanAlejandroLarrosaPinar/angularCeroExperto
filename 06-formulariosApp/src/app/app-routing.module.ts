import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import ('./template/template.module').then(m=>TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m=>ReactiveModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
