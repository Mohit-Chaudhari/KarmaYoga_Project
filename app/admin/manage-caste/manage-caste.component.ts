import { Component, OnInit } from '@angular/core';
import { ManageCasteService } from '../services/manage-caste.service';

@Component({
  selector: 'app-manage-caste',
  templateUrl: './manage-caste.component.html',
  styleUrls: ['./manage-caste.component.css']
})
export class ManageCasteComponent implements OnInit {
  showDeletedMessage: boolean;
  CasteArray: any;
  submitted: boolean;
  showSuccessMessage: boolean;

  constructor(private ManageCasteService: ManageCasteService) { }

  formControls = this.ManageCasteService.form.controls;

  ngOnInit() {
    this.ManageCasteService.getCaste().subscribe(
      list => {
        this.CasteArray = list.map(item => {
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

    if(this.ManageCasteService.form.valid)
    {
      if(this.ManageCasteService.form.get('$key').value == null)
      {
        this.ManageCasteService.insertCaste(this.ManageCasteService.form.value);
      }

      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.ManageCasteService.form.reset();

      this.ManageCasteService.form.setValue({
        $key: null,
        AddCaste: ''
      });
  }
}

  onDelete($key) 
  {
    if (confirm('KarmaYoga : Are you sure to remove this Caste ?')) 
    {
      this.ManageCasteService.deleteDepartment($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

}
