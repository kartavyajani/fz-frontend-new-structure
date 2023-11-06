import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankstorageComponent } from './tankstorage.component';

describe('TankstorageComponent', () => {
  let component: TankstorageComponent;
  let fixture: ComponentFixture<TankstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankstorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
