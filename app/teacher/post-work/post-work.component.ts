import { Component, OnInit } from '@angular/core';
import { PostWorkService } from '../services/post-work.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-work',
  templateUrl: './post-work.component.html',
  styleUrls: ['./post-work.component.css']
})
export class PostWorkComponent implements OnInit {
  submitted: boolean;
  showSuccessMessage: boolean;
  DepartmentArray: any;
  LoginAuthentication: string;

  constructor(private PostWorkService: PostWorkService, private router: Router) { }

  formControls = this.PostWorkService.form.controls;
  WrokArray = [];

  ngOnInit() {
    //this.StudentRegistrationService.getStudent();
    this.PostWorkService.getWork().subscribe(
      list => {
        this.WrokArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

      //Retrieve Department list
      this.PostWorkService.getDepartment().subscribe(
        list => {
          this.DepartmentArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        }
      );

      if(localStorage.getItem('TeacherLoginId'))
      {
        this.LoginAuthentication = localStorage.getItem('TeacherLoginId');
      }
      else
      {
        this.router.navigateByUrl(
          this.router.createUrlTree(
            ['teacher-list/login']
          )
        );
      }
  }

  onSubmit()
  {
    this.submitted = true;

    if(this.PostWorkService.form.valid)
    {
      this.PostWorkService.postWork(this.PostWorkService.form.value);
    }
    this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 5000);
      this.submitted = false;
      this.PostWorkService.form.reset();
  }

}
