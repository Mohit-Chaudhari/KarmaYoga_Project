import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  LoginAuthentication: boolean = false;
  AppicantID: string = '';

  constructor(private ProfileService: ProfileService, private CommonService: CommonService, private router : Router) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.ProfileService.form.controls;
  StudentArray = [];
  DepartmentArray = [];
  CasteArray = [];

  ngOnInit() {
    //Fetch Student array from here.
    this.ProfileService.getStudent().subscribe(
      list => {
        this.StudentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

      //Fetch Department array from here.
      this.ProfileService.getDepartment().subscribe(
        list => {
          this.DepartmentArray = list.map(item =>{
            return {
              $key: item.key,
              ...item.payload.val()
            }
          })
        }
      );

      //Fetch Caste array form here.
      this.ProfileService.getCaste().subscribe(
        list => {
          this.CasteArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            }
          })
        }
      );

      this.AppicantID = localStorage.getItem('ApplicantId');
      if(localStorage.getItem('LoginId'))
      {
        this.LoginAuthentication = true;
      }
      else
      {
        this.router.navigateByUrl(
          this.router.createUrlTree(
            ['student-list/login']
          )
        );
      }
  }

  onSubmit()
  {
    this.submitted = true;

    if(this.ProfileService.form.valid)
    {
      this.ProfileService.RegisterStudent(this.ProfileService.form.value);
    }
    this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 5000);
      this.submitted = false;
      this.ProfileService.form.reset();

    //this is to be done for proper reset operation
    this.ProfileService.form.setValue({
      $key: null,
      StudentName: '',
      StudentContactNumber: '',
      StudentBranch: '',
      StudentClass: '',
      StudentRollNumber: '',
      StudentCaste: '',
      StudentBankName: '',
      StudentBankAccountNumber: '',
      StudentFatherName: '',
      StudentFatherContactNumber: '',
      StudentMotherName: '',
      StudentMotherContactNumber: '',
      StudentCurrentAddress: '',
      StudentPermanentAddress: '',
      StudentParentOccupation: '',
      StudentParentAnnualIncome: ''
    });
  }

}
