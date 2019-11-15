import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { FindWorkComponent } from './find-work/find-work.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [StudentComponent, LoginComponent, RegisterComponent, ProfileComponent, SidepanelComponent, FindWorkComponent, LogoutComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
