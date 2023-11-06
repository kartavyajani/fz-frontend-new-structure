import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantequipmentlistComponent } from './plantequipmentlist.component';

describe('PlantequipmentlistComponent', () => {
  let component: PlantequipmentlistComponent;
  let fixture: ComponentFixture<PlantequipmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantequipmentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantequipmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
