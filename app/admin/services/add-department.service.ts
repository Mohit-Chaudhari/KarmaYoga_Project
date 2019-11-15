import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddDepartmentService {

  constructor(private firebase: AngularFireDatabase) { }

  departmentList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    departmentname: new FormControl('',[Validators.required])
  });

  getDepartments()
  {
    this.departmentList = this.firebase.list('departmentlist');
    return this.departmentList.snapshotChanges();
  }

  deleteDepartment($key: string)
  {
    this.departmentList.remove($key);
  }

  insertDepartment(dept)
  {
    this.departmentList.push({
      departmentname: dept.departmentname
    });
  }
}
