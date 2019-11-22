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

  constructor(private LoginService: LoginService,private CommonService: CommonService,private router: Router) { }

  LoginAuthentication: boolean = false;
  formControls = this.LoginService.form.controls;
  LoginArray = [];
  i:number;

  ngOnInit() {

    //Fetch Student array from here.
    this.CommonService.getLoginDetails().subscribe(
      list => {
        this.LoginArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

      console.log("Username : ",localStorage.getItem('TeacherLoginId'))

  }

  //Fetching password
  accessPass(Array:[])
  {
    return Array['TeacherPassword'];
  }

  //Fetching Key
  accessKey(Array : [])
  {
    return Array['$key'];
  }

  //Fetching Username
  accessUsername(Array : [])
  {
    return Array['TeacherUsername'];
  }

  //Fetching Proffessor ID
  accessProfID(Array : [])
  {
    return Array['ProfId'];
  }

  //Function to work after pressing submit button.
  onSubmit()
  {
    for(this.i=0;this.i<this.LoginArray.length;this.i++)
    {
      console.log("In for loop of onsubmit of login");
      if(this.formControls.TeacherUsername.value == this.accessUsername(this.LoginArray[this.i]) && this.formControls.TeacherPassword.value == this.accessPass(this.LoginArray[this.i]))
      {
        console.log("Key of given recors is : ",this.accessKey(this.LoginArray[this.i]));
        console.log("Entered value : ",this.formControls.TeacherUsername.value);
        console.log("Login Array id",this.accessUsername(this.LoginArray[this.i]));
        console.log("Proffessor id : ",this.accessProfID(this.LoginArray[this.i]));
        this.CommonService.LoginId = this.formControls.TeacherUsername.value;

        //Setting local Storage
        localStorage.setItem('TeacherLoginId',this.CommonService.LoginId);
        localStorage.setItem('key',this.accessKey(this.LoginArray[this.i]));
        localStorage.setItem('ProfID',this.accessProfID(this.LoginArray[this.i]));

        //Reseting Form.
        this.LoginService.form.reset();

         //Proper reset function
         this.LoginService.form.setValue({
          $key: null,
          TeacherUsername: '',
          TeacherPassword: ''
        });

        setTimeout(() => 500000);
        //Navigate to Home Page.
        this.router.navigateByUrl(
          this.router.createUrlTree(
            ['teacher-list']
          )
        );
        this.LoginAuthentication = true;
        break;
      }
    }

    //Reset form if invalid username or id
    if(this.LoginAuthentication == false)
    {
      console.log("In invalid condition");
      this.LoginService.form.reset();
    }
  }
}
