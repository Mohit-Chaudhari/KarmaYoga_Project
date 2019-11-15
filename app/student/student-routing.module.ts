import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { FindWorkComponent } from './find-work/find-work.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'sidepanel', component: SidepanelComponent },
  { path: 'find-work', component: FindWorkComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
