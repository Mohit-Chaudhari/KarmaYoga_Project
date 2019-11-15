import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWorkComponent } from './post-work.component';

describe('PostWorkComponent', () => {
  let component: PostWorkComponent;
  let fixture: ComponentFixture<PostWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
