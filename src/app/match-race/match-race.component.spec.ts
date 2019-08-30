import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRaceComponent } from './match-race.component';

describe('MatchRaceComponent', () => {
  let component: MatchRaceComponent;
  let fixture: ComponentFixture<MatchRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
