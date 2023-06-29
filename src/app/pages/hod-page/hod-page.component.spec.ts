import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodPageComponent } from './hod-page.component';

describe('HodPageComponent', () => {
  let component: HodPageComponent;
  let fixture: ComponentFixture<HodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
