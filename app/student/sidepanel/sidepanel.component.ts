import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  constructor() { }
  LoginAuthentication:boolean;

  ngOnInit() {
    if(localStorage.getItem('LoginId'))
    {
      this.LoginAuthentication = true;
    }
    else
    {
      this.LoginAuthentication = false;
    }
  }

}
