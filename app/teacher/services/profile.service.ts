import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firebase: AngularFireDatabase) { }

  TeacherProfileList: AngularFireList<any>;
  departmentlist: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(''),
    TeacherFullName: new FormControl('',[Validators.required]),
    TeacherDepartment: new FormControl('',[Validators.required]),
    TeacherBio: new FormControl('',Validators.required)
  });

  //Retrieving department data
  getDepartment() {
    this.departmentlist = this.firebase.list('departmentlist');
    return this.departmentlist.snapshotChanges();
  }

  //Retireving Teacher profile data
  getTeacherProfile()
  {
    this.TeacherProfileList = this.firebase.list('Teacher-Profile');
    return this.TeacherProfileList.snapshotChanges();
  }

  SaveTeacherProfile(profile)
  {
    this.TeacherProfileList.push({
      TeacherFullName: profile.TeacherFullName,
      TeacherDepartment: profile.TeacherDepartment,
      TeacherBio: profile.TeacherBio
    });
  }
}
