import { Component, OnInit } from '@angular/core';
import { AddDepartmentService } from '../services/add-department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private AddDepartment: AddDepartmentService) { }

  DepartmentArray = [];
  formControls = this.AddDepartment.form.controls;
  submitted: boolean;
  showSuccessMessage: boolean;
  showDeletedMessage: boolean;

  ngOnInit() {
    this.AddDepartment.getDepartments().subscribe(
      list => {
        this.DepartmentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onSubmit()
  {
    this.submitted = true;

    if(this.AddDepartment.form.valid)
    {
      if(this.AddDepartment.form.get('$key').value == null)
      {
        this.AddDepartment.insertDepartment(this.AddDepartment.form.value);
      }

      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.AddDepartment.form.reset();

      this.AddDepartment.form.setValue({
        $key: null,
        departmentname: ''
      });

    }
  }

  onDelete($key) 
  {
    if (confirm('KarmaYoga : Are you sure to remove this department ?')) 
    {
      this.AddDepartment.deleteDepartment($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


}
