import { Injectable } from '@angular/core';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostWorkService {
  departmentlist: AngularFireList<unknown>;

  constructor(private firebase: AngularFireDatabase) { }

  Work: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    TeacherName: new FormControl('Prof. ',[Validators.required]),
    WorkingDepartment: new FormControl('',[Validators.required]),
    WrokDescription: new FormControl('',[Validators.required]),
    StartTime: new FormControl('',[Validators.required]),
    EndTime: new FormControl('',[Validators.required])
  });

  //Getting data from Student-Register
  getWork()
  {
    this.Work = this.firebase.list('Post-Find-Work');
    return this.Work.snapshotChanges();
  }

  //Retrieving department list.
  getDepartment() {
    this.departmentlist = this.firebase.list('departmentlist');
    return this.departmentlist.snapshotChanges();
  }

  //Post work here.
  postWork(work)
  {
    this.Work.push({
      TeacherName: work.TeacherName,
      WorkingDepartment: work.WorkingDepartment,
      WrokDescription: work.WrokDescription,
      StartTime: work.StartTime,
      EndTime: work.EndTime
    });
  }

}
