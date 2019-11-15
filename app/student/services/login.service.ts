import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  form = new FormGroup({
    $key: new FormControl(null),
    StudentUserName: new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){4,}@gmail\.com$/)]),
    StudentPassword: new FormControl('',[Validators.required])
  });
}
