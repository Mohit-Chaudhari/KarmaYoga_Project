import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ApplicantStudentListComponent } from './applicant-student-list/applicant-student-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ManageCasteComponent } from './manage-caste/manage-caste.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';


@NgModule({
  declarations: [AdminComponent, LoginComponent, ApplicantStudentListComponent, AddDepartmentComponent, ManageCasteComponent, SidepanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
