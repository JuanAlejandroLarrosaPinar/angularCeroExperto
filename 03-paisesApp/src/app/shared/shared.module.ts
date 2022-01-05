import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //necesitamos importarlo para poder usar el routerlink
  ],exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
