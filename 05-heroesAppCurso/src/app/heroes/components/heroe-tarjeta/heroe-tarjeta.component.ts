import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../confirmar/confirmar.component';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class HeroeTarjetaComponent{

  @Input() heroe!: Heroe;
  @Output() onDeleteHeroe: EventEmitter<Heroe>=new EventEmitter<Heroe>();

  constructor(private heroesService: HeroesService, private dialog: MatDialog
    ,private snackBar: MatSnackBar, private router: Router){

  }

  borrarHeroe(){
    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '350px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result ) {
          this.heroesService.borrarHeroe( this.heroe.id! )
            .subscribe( resp => {
              this.mostrarSnakbar('Registro borrado');
              //this.router.navigate(['/heroes/listado']);
              console.log('eliminar heroe');
              this.onDeleteHeroe.emit(this.heroe);
            });
        }
        
      }
    )
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, '', {
      duration: 4500,

    });

  }

}
