import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase: AngularFireDatabase) { }

  studentList: AngularFireList<any>;

  getStudents()
  {
    this.studentList = this.firebase.list('Student-Profile');
    return this.studentList.snapshotChanges();
  }

  deleteStudent($key: string)
  {
    this.studentList.remove($key);
  }

}
