import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPayslipsComponent } from './all-payslips.component';

describe('AllPayslipsComponent', () => {
  let component: AllPayslipsComponent;
  let fixture: ComponentFixture<AllPayslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPayslipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
