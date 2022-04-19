import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHabitacionesComponent } from './table-habitaciones.component';

describe('TableHabitacionesComponent', () => {
  let component: TableHabitacionesComponent;
  let fixture: ComponentFixture<TableHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHabitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
