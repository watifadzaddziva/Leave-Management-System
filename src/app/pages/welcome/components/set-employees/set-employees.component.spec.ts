import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmployeesComponent } from './set-employees.component';

describe('SetEmployeesComponent', () => {
  let component: SetEmployeesComponent;
  let fixture: ComponentFixture<SetEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
