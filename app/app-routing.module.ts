import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { KarmaYogaTeamComponent } from './karma-yoga-team/karma-yoga-team.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'teacher-list', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'student-list', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: 'admin-list', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'contact', component: ContactComponent },
  { path: 'karmayoga-team', component: KarmaYogaTeamComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
