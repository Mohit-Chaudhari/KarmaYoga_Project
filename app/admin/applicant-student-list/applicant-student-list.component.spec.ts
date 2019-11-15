import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantStudentListComponent } from './applicant-student-list.component';

describe('ApplicantStudentListComponent', () => {
  let component: ApplicantStudentListComponent;
  let fixture: ComponentFixture<ApplicantStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
