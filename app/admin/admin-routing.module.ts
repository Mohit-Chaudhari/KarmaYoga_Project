import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ApplicantStudentListComponent } from './applicant-student-list/applicant-student-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ManageCasteComponent } from './manage-caste/manage-caste.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'applicant-student', component: ApplicantStudentListComponent},
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'manage-caste', component: ManageCasteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
