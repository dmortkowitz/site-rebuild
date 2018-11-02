import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tryRegister(value){
  this.authService.doRegister(value)
  .then(res => {
    console.log(res);
    this.errorMessage = "";
    this.successMessage = "Your account has been created";
  }, err => {
    console.log(err);
    this.errorMessage = err.message;
    this.successMessage = "";
  })
}

  constructor(public afAuth: AngularFireAuth){}

  ngOnInit() {
  }

}
