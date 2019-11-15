import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCasteComponent } from './manage-caste.component';

describe('ManageCasteComponent', () => {
  let component: ManageCasteComponent;
  let fixture: ComponentFixture<ManageCasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
