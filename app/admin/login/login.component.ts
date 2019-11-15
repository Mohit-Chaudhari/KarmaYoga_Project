import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  formControls = this.LoginService.form.controls;
  AdminArray = [];

  ngOnInit() {
    this.LoginService.getAdmin().subscribe(
      list => {
        this.AdminArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onSubmit()
  {
    //fill login logic here.
  }

}
