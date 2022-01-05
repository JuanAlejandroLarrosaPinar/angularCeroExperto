import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent //con los exports le estamos diciendo qué podemos importar desde otro módulo.
    ],
    imports:[
        CommonModule //para ngif y ngfor
    ]
})
export class HeroesModule{

}