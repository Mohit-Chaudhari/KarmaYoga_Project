import { Injectable } from '@angular/core';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FindWorkService {

  constructor(private firebase: AngularFireDatabase) { }

  work: AngularFireList<any>;
  AssignWork: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl('',Validators.required),
    TeacherName: new FormControl('',Validators.required),
    WorkingDepartment: new FormControl('',Validators.required),
    WrokDescription: new FormControl('',Validators.required),
    StartTime: new FormControl('',Validators.required),
    EndTime: new FormControl('',Validators.required)
  });

  getWork()
  {
    this.work = this.firebase.list('Post-Find-Work');
    return this.work.snapshotChanges();
  }

  getAssignWork()
  {
    this.AssignWork = this.firebase.list('Assign-Work');
    return this.AssignWork.snapshotChanges();
  }

  populateForm(work) {
    this.form.setValue(work)
  }

  updateWork(work)
  {
    this.AssignWork.push(
      {
      TeacherName: work.TeacherName,
      WorkingDepartment: work.WorkingDepartment,
      WrokDescription: work.WrokDescription,
      StartTime: work.StartTime,
      EndTime: work.EndTime
    });
  }

  deleteWork($key: any)
  {
    this.work.remove($key);
  }

}
