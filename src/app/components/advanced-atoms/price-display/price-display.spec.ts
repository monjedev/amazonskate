import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDisplay } from './price-display';

describe('PriceDisplay', () => {
  let component: PriceDisplay;
  let fixture: ComponentFixture<PriceDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
