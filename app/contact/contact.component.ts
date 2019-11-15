import { Component, OnInit } from '@angular/core';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted: boolean;
  showSuccessMessage: boolean;
  ContactUsArray: any[];

  constructor(private firebase: AngularFireDatabase) { }

  SendMessage: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    ContactFullName: new FormControl('',[Validators.required]),
    ContactEmail: new FormControl('',[Validators.required,Validators.email]),
    ContactMobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    ContactMeassage: new FormControl('',Validators.required)
  });

  ngOnInit() {
    //Fetch Contact Us array from here.
    this.getContactUs().subscribe(
      list => {
        this.ContactUsArray = list.map(item => {
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

    if(this.form.valid)
    {
      this.ContactSupport(this.form.value);
    }
    this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 5000);
      this.submitted = false;
      this.form.reset();

    //this is to be done for proper reset operation
    this.form.setValue({
      $key: null,
      ContactEmail: '',
      ContactFullName: '',
      ContactMeassage:'',
      ContactMobile:''
    });
  }

  getContactUs()
  {
    this.SendMessage = this.firebase.list('contact-us');
    return this.SendMessage.snapshotChanges();
  }

  ContactSupport(msg) {
    this.SendMessage.push({
      ContactFullName: msg.ContactFullName,
      ContactEmail: msg.ContactEmail,
      ContactMobile: msg.ContactMobile,
      ContactMeassage: msg.ContactMeassage
    });
  }

}
