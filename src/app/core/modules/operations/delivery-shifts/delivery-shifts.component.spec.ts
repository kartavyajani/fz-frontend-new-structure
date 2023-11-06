import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryShiftsComponent } from './delivery-shifts.component';

describe('DeliveryShiftsComponent', () => {
  let component: DeliveryShiftsComponent;
  let fixture: ComponentFixture<DeliveryShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryShiftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
