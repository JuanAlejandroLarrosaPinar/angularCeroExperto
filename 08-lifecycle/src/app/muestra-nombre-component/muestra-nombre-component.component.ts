import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre-component',
  templateUrl: './muestra-nombre-component.component.html',
  styleUrls: ['./muestra-nombre-component.component.css']
})
export class MuestraNombreComponentComponent implements OnInit, OnChanges{

  @Input() nombre!: string;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); 
  }

  ngOnInit(): void {
  }

}
