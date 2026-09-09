import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteDashboard } from './athlete-dashboard';

describe('AthleteDashboard', () => {
  let component: AthleteDashboard;
  let fixture: ComponentFixture<AthleteDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
