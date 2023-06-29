import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetHodComponent } from './set-hod.component';

describe('SetHodComponent', () => {
  let component: SetHodComponent;
  let fixture: ComponentFixture<SetHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetHodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
