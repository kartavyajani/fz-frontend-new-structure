import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadsheetComponent } from './loadsheet.component';

describe('LoadsheetComponent', () => {
  let component: LoadsheetComponent;
  let fixture: ComponentFixture<LoadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
