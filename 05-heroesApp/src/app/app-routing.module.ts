import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './heroes/pages/home/home.component';
import { ListadoComponent } from './heroes/pages/listado/listado.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes=[
  {path:'',component:HomeComponent},
  {path:'auth',
    //cuando entre al auth carga los componentes del módulo auth
    loadChildren:()=> import ('./auth/auth.module').then(m=>m.AuthModule)
  },
  {path:'heroe',loadChildren:()=>import('./heroes/heroes.module').then(m=>m.HeroesModule)},
  {path:'404',component:ErrorPageComponent},
  {path:'**',redirectTo:'/404',}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule {}