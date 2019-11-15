import { Component, OnInit } from '@angular/core';
import { FindWorkService } from '../services/find-work.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-work',
  templateUrl: './find-work.component.html',
  styleUrls: ['./find-work.component.css']
})
export class FindWorkComponent implements OnInit {
  OperationSuccess: boolean;

  constructor(private FindWorkService: FindWorkService, private router: Router) { }

  WorkArray = [];
  AssignWorkArray = [];
  formControls = this.FindWorkService.form.controls;

  ngOnInit() {

    //Get Work
    this.FindWorkService.getWork().subscribe(
      list => {
        this.WorkArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

    //Assign Work
    this.FindWorkService.getAssignWork().subscribe(
      list => {
        this.AssignWorkArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

      if(localStorage.getItem('LoginId'))
      {

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

  JoinWork(work)
  {
    this.FindWorkService.populateForm(work);
    if(confirm('KarmaYoga : Are you sure to join this work ?'))
    {
      if(this.FindWorkService.form.valid)
      {
        this.FindWorkService.updateWork(this.FindWorkService.form.value);
        this.FindWorkService.deleteWork(work.$key);
        this.OperationSuccess = true;
        setTimeout(() => this.OperationSuccess = false, 3000);
      }
    }
  }

}
