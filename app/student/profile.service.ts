import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  castelist: AngularFireList<any>;
  getCaste() {
    this.castelist = this.firebase.list('castelist');
    return this.castelist.snapshotChanges();
  }
  getDepartment() {
    this.departmentlist = this.firebase.list('departmentlist');
    return this.departmentlist.snapshotChanges();
  }

  constructor(private firebase: AngularFireDatabase) { }

  StudentProfile: AngularFireList<any>;
  departmentlist: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    UserName: new FormControl(''),
    StudentName: new FormControl('',[Validators.required]),
    StudentContactNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    StudentBranch: new FormControl('',[Validators.required]),
    StudentClass: new FormControl('',[Validators.required]),
    StudentRollNumber: new FormControl('',[Validators.required]),
    StudentCaste: new FormControl('',[Validators.required]),
    StudentBankName: new FormControl('Bank of Maharashtra',[Validators.required]),
    StudentBankAccountNumber: new FormControl('',[Validators.required,Validators.minLength(8)]),
    StudentFatherName: new FormControl('',[Validators.required]),
    StudentFatherContactNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    StudentMotherName: new FormControl('',[Validators.required]),
    StudentMotherContactNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    StudentCurrentAddress: new FormControl('',[Validators.required]),
    StudentPermanentAddress: new FormControl('',[Validators.required]),
    StudentParentOccupation: new FormControl('',[Validators.required]),
    StudentParentAnnualIncome: new FormControl('',[Validators.required])
  });

  //Getting data from Student-Register
  getStudent()
  {
    this.StudentProfile = this.firebase.list('Student-Profile');
    return this.StudentProfile.snapshotChanges();
  }

  //Inserting registration data.
  RegisterStudent(Register)
  {
    this.StudentProfile.push({
      StudentName: Register.StudentName,
      StudentContactNumber: Register.StudentContactNumber,
      StudentBranch: Register.StudentBranch,
      StudentClass: Register.StudentClass,
      StudentRollNumber: Register.StudentRollNumber,
      StudentCaste: Register.StudentCaste,
      StudentBankName: Register.StudentBankName,
      StudentBankAccountNumber: Register.StudentBankAccountNumber,
      StudentFatherName: Register.StudentFatherName,
      StudentFatherContactNumber: Register.StudentFatherContactNumber,
      StudentMotherName: Register.StudentMotherName,
      StudentMotherContactNumber: Register.StudentMotherContactNumber,
      StudentCurrentAddress: Register.StudentCurrentAddress,
      StudentPermanentAddress: Register.StudentPermanentAddress,
      StudentParentOccupation: Register.StudentParentOccupation,
      StudentParentAnnualIncome: Register.StudentParentAnnualIncome
    });
  }

}
