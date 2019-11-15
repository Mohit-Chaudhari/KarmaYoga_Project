import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PostWorkComponent } from './post-work/post-work.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: TeacherComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile',component: ProfileComponent },
  { path: 'post-work', component: PostWorkComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
