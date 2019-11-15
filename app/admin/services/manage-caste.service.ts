import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ManageCasteService {

  constructor(private firebase: AngularFireDatabase) { }
  CasteList: AngularFireList<any>;


  form = new FormGroup({
    $key: new FormControl(null),
    AddCaste: new FormControl('',Validators.required)
  });

  getCaste() {
    this.CasteList = this.firebase.list('castelist');
    return this.CasteList.snapshotChanges();
  }

  deleteDepartment($key: any) {
    this.CasteList.remove($key);
  }

  insertCaste(caste)
  {
    this.CasteList.push({
      AddCaste: caste.AddCaste
    });
  }

}
