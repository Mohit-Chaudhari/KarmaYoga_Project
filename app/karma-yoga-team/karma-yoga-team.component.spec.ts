import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmaYogaTeamComponent } from './karma-yoga-team.component';

describe('KarmaYogaTeamComponent', () => {
  let component: KarmaYogaTeamComponent;
  let fixture: ComponentFixture<KarmaYogaTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarmaYogaTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarmaYogaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
