import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //Variable Declarations.
  LoginAuthentication: boolean = false;
  formControls = this.LoginService.form.controls;
  LoginArray = [];
  i:number;

  constructor(private LoginService: LoginService,private CommonService: CommonService,private router: Router) { }

  ngOnInit() 
  {
    //Fetch Student array from here.
    this.CommonService.getLoginList().subscribe(
      list => {
        this.LoginArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  accessValueOfId(Array:[])
  {
    return Array['StudentEmail'];
  }

  accessValueOfPass(Array:[])
  {
    return Array['StudentPassword'];
  }

  accessValueOfKey(Array:[])
  {
    return Array['$key'];
  }

  accessApplicantId(Array:[])
  {
    return Array['ApplicantId'];
  }

  onSubmit()
  {
    for(this.i=0;this.i<this.LoginArray.length;this.i++)
    {
      if(this.formControls.StudentUserName.value == this.accessValueOfId(this.LoginArray[this.i]) && this.formControls.StudentPassword.value == this.accessValueOfPass(this.LoginArray[this.i]))
      {
        console.log("Key of given recors is : ",this.accessValueOfKey(this.LoginArray[this.i]));
        console.log("Entered value : ",this.formControls.StudentUserName.value);
        console.log("Login Array id",this.accessValueOfId(this.LoginArray[this.i]));
        this.CommonService.LoginId = this.formControls.StudentUserName.value;

        //Setting local Storage
        localStorage.setItem('LoginId',this.CommonService.LoginId);
        localStorage.setItem('key',this.accessValueOfKey(this.LoginArray[this.i]));
        localStorage.setItem('ApplicantId',this.accessApplicantId(this.LoginArray[this.i]));

        //Resting Form.
        this.LoginService.form.reset();

         //Proper reset function
         this.LoginService.form.setValue({
          $key: null,
          StudentUserName: '',
          StudentPassword: ''
        });

        setTimeout(() => 500000);
        //Navigate to Home Page.
        this.router.navigateByUrl(
          this.router.createUrlTree(
            ['student-list']
          )
        );
        this.LoginAuthentication = true;
        break;
      }
    }

    //Reset form if invalid username or id
    if(this.LoginAuthentication == false)
    {
      console.log("in invalid condition");
      this.LoginService.form.reset();
    }
  }
}
