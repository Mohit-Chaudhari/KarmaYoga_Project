import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  LoginAuthentication:boolean;

  ngOnInit() {
    if(localStorage.getItem('LoginId'))
    {
      this.LoginAuthentication = true;
    }
    else
    {
      this.LoginAuthentication = false;
    }
  }

}
