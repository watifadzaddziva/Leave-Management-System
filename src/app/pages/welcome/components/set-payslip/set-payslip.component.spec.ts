import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPayslipComponent } from './set-payslip.component';

describe('SetPayslipComponent', () => {
  let component: SetPayslipComponent;
  let fixture: ComponentFixture<SetPayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPayslipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
