import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  RegisterTeacher(Teacher) {
    this.TeacherList.push({
      TeacherUsername: Teacher.TeacherUsername,
      TeacherPassword: Teacher.TeacherPassword,
      ProfId: Teacher.ProfId
    });
  }

  constructor(private firebase: AngularFireDatabase) { }
  TeacherList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    ProfId: new FormControl(''),
    TeacherUsername: new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){4,}@gmail\.com$/)]),
    TeacherPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
    TeacherConfirmPassword: new FormControl('',[Validators.required])
  },{
    validators: this.MustMatch('TeacherPassword','TeacherConfirmPassword')
  });

  getTeachers()
  {
    this.TeacherList = this.firebase.list('Teacher-Register');
    return this.TeacherList.snapshotChanges();
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
