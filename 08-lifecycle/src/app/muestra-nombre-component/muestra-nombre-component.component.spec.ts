import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraNombreComponentComponent } from './muestra-nombre-component.component';

describe('MuestraNombreComponentComponent', () => {
  let component: MuestraNombreComponentComponent;
  let fixture: ComponentFixture<MuestraNombreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraNombreComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraNombreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
