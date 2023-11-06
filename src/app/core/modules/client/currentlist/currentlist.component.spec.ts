import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlistComponent } from './currentlist.component';

describe('CurrentlistComponent', () => {
  let component: CurrentlistComponent;
  let fixture: ComponentFixture<CurrentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
