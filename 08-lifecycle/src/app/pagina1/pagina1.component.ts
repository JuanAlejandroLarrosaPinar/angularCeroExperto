import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export default class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{


  nombre: string = '';
  segundos: number = 0;
  timerSubscription! : Subscription;

  constructor() { 
    console.log('constructor');// es lo primero que se ejecuta
  }

  

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges'); // no se ejecuta en la inicialización.
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    
    this.timerSubscription = interval(1000).subscribe(i=>{
      this.segundos = i;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy'); //no se ejecuta en la inicialización
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado');
  }

  guardar(){

  }

}
