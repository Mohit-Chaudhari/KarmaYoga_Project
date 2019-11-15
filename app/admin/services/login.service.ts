import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firebase: AngularFireDatabase) { }

  AdminList : AngularFireList<any>;

  form = new FormGroup({
    AdminUsername: new FormControl('',[Validators.required]),
    AdminPassword: new FormControl('',[Validators.required])
  });

  getAdmin()
  {
    this.AdminList = this.firebase.list('Teacher-Register');
    return this.AdminList.snapshotChanges();
  }

}
