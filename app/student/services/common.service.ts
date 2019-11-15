import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public LoginId: any;

  constructor(private firebase: AngularFireDatabase) { }

  LoginList: AngularFireList<any>;

  getLoginList()
  {
    this.LoginList = this.firebase.list('Student-Register');
    return this.LoginList.snapshotChanges();
  }  
}
