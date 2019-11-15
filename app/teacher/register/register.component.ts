import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private RegisterService: RegisterService, private router: Router) { }

  formControls = this.RegisterService.form.controls;
  teacherArray = [];
  showDeletedMessage: boolean;
  submitted: boolean;
  showSuccessMessage: boolean;
  i:number;
  max:number = 0;

  ngOnInit() {
    this.RegisterService.getTeachers().subscribe(
      list => {
        this.teacherArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  FindMaxId()
  {
    for(this.i=0;this.i<this.teacherArray.length;this.i++)
    {
      if(this.teacherArray[this.i].ProfId>this.max)
      {
        this.max = this.teacherArray[this.i].ProfId;
      }
    }
    return this.max+1;
  }

  onSubmit()
  {
    console.log("In on submit function");
    console.log(this.formControls.TeacherUsername.value);
    this.formControls.ProfId.setValue(this.FindMaxId());
    console.log("After profid : ",this.FindMaxId());
    this.submitted = true;
    if(this.RegisterService.form.valid)
    {
      this.RegisterService.RegisterTeacher(this.RegisterService.form.value);
    }

    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 5000);
    this.submitted = false;
    this.RegisterService.form.reset();

    //This is to be done for proper reset operation
    this.RegisterService.form.setValue({
      $key: null,
      TeacherUsername: '',
      TeacherPassword: '',
      TeacherConfirmPassword: '',
      ProfId: ''
    });

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['teacher-list/login']
      )
    );
  }
}
