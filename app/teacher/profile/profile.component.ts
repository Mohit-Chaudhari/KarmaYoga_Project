import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  LoginAuthentication: string;

  constructor(private ProfileService: ProfileService, private router: Router) { }

  formControls = this.ProfileService.form.controls;
  TeacherProfileArray: any;
  DepartmentArray: any;

  ngOnInit() {

    //Retireve Teacher Profile List
    this.ProfileService.getTeacherProfile().subscribe(
      list => {
        this.TeacherProfileArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

      //Retrieve Department list
      this.ProfileService.getDepartment().subscribe(
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

}
