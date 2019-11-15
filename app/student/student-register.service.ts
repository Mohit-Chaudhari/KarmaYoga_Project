import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentRegisterService {

  constructor(private firebase: AngularFireDatabase) { }

  StudentRegister: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(''),
    ApplicantId: new FormControl(''),
    StudentEmail: new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){4,}@gmail\.com$/)]),
    StudentPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
    StudentConfirmPassword: new FormControl('')
  },{
    validators: this.MustMatch('StudentPassword','StudentConfirmPassword')
  });

  //Getting data from Student-Register
  getStudent()
  {
    this.StudentRegister = this.firebase.list('Student-Register');
    return this.StudentRegister.snapshotChanges();
  }

  //Inserting registration data.
  RegisterStudent(Register)
  {
    this.StudentRegister.push({
      StudentEmail: Register.StudentEmail,
      StudentPassword: Register.StudentPassword,
      ApplicantId: Register.ApplicantId
    });
  }

  //Password matching code here
  MustMatch(str1:string,str2:string)
  {
    return (formGroup: FormGroup):{[key:string]: any} => {
      const control = formGroup.controls[str1];
      const matchingControl = formGroup.controls[str2];

      if(matchingControl.errors && !matchingControl.errors.MustMatch)
      {
        //return if another validator has already found an error on the matching control.
        return;
      }

      //set error on matching control if validation fails
      if(control.value !== matchingControl.value)
      {
        matchingControl.setErrors({MustMatch: true});
      }
      else
      {
        matchingControl.setErrors(null);
      }
    }
  }

}
