import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsPage } from './clubs-page';

describe('ClubsPage', () => {
  let component: ClubsPage;
  let fixture: ComponentFixture<ClubsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
