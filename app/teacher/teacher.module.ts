import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { ProfileComponent } from './profile/profile.component';
import { PostWorkComponent } from './post-work/post-work.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [TeacherComponent, LoginComponent, RegisterComponent, SidepanelComponent, ProfileComponent, PostWorkComponent, LogoutComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TeacherModule { }
