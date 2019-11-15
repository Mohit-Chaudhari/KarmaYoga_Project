import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  form = new FormGroup({
    $key: new FormControl(null),
    TeacherUsername: new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){4,}@gmail\.com$/)]),
    TeacherPassword: new FormControl('',[Validators.required])
  });
}


