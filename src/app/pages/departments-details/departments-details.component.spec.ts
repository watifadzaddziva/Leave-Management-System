import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDetailsComponent } from './departments-details.component';

describe('DepartmentsDetailsComponent', () => {
  let component: DepartmentsDetailsComponent;
  let fixture: ComponentFixture<DepartmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
