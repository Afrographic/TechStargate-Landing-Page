import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreerComponent } from './carreer.component';

describe('CarreerComponent', () => {
  let component: CarreerComponent;
  let fixture: ComponentFixture<CarreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
