import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesPage } from './athletes-page';

describe('AthletesPage', () => {
  let component: AthletesPage;
  let fixture: ComponentFixture<AthletesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthletesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AthletesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
