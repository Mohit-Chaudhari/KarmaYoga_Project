import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private firebase: AngularFireDatabase) { }

  LoginList: AngularFireList<any>;
  LoginId;

  getLoginDetails()
  {
    this.LoginList = this.firebase.list('Teacher-Register');
    return this.LoginList.snapshotChanges();
  }

}
