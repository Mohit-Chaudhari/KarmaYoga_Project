import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }
  LoginAuthentication;

  ngOnInit() {
    this.LoginAuthentication = localStorage.getItem('TeacherLoginId');
  }

}
