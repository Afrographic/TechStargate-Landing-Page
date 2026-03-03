import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingEdgeSolutionsComponent } from './cutting-edge-solutions.component';

describe('CuttingEdgeSolutionsComponent', () => {
  let component: CuttingEdgeSolutionsComponent;
  let fixture: ComponentFixture<CuttingEdgeSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuttingEdgeSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingEdgeSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
