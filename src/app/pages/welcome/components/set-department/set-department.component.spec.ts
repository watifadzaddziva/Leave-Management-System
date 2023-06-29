import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDepartmentComponent } from './set-department.component';

describe('SetDepartmentComponent', () => {
  let component: SetDepartmentComponent;
  let fixture: ComponentFixture<SetDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
