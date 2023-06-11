import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeavesReportsComponent } from './all-leaves-reports.component';

describe('AllLeavesReportsComponent', () => {
  let component: AllLeavesReportsComponent;
  let fixture: ComponentFixture<AllLeavesReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeavesReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeavesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
