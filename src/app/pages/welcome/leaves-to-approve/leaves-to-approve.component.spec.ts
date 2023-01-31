import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesToApproveComponent } from './leaves-to-approve.component';

describe('LeavesToApproveComponent', () => {
  let component: LeavesToApproveComponent;
  let fixture: ComponentFixture<LeavesToApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesToApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavesToApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
