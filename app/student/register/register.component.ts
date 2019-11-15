import { Component, OnInit } from '@angular/core';
import { StudentRegisterService } from '../student-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private StudentRegistrationService: StudentRegisterService, private router: Router) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.StudentRegistrationService.form.controls;
  StudentArray = [];
  i:number ;
  max:number = 0;

  ngOnInit() 
  {
    //this.StudentRegistrationService.getStudent();
    this.StudentRegistrationService.getStudent().subscribe(
      list => {
        this.StudentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  //Find maximum number present into the system.
  FindMaxId()
  {
    for(this.i=0;this.i<this.StudentArray.length;this.i++)
    {
      if(this.StudentArray[this.i].ApplicantId>this.max)
      {
        this.max = this.StudentArray[this.i].ApplicantId;
      }
    }
    return this.max+1;
  }

  onSubmit()
  {
    console.log(this.formControls.StudentEmail.value);
    this.formControls.ApplicantId.setValue(this.FindMaxId());
    this.submitted = true;
    if(this.StudentRegistrationService.form.valid)
    {
      this.StudentRegistrationService.RegisterStudent(this.StudentRegistrationService.form.value);
    }

    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 5000);
    this.submitted = false;
    this.StudentRegistrationService.form.reset();

    //this is to be done for proper reset operation
    this.StudentRegistrationService.form.setValue({
      $key: null,
      ApplicantId: '',
      StudentEmail: '',
      StudentPassword: '',
      StudentConfirmPassword: ''
    });

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['student-list/login']
      )
    );
  }

}
