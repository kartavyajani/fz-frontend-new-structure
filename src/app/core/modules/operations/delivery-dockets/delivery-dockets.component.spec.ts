import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDocketsComponent } from './delivery-dockets.component';

describe('DeliveryDocketsComponent', () => {
  let component: DeliveryDocketsComponent;
  let fixture: ComponentFixture<DeliveryDocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDocketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
