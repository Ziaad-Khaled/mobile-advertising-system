import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  user!: User;

  validationMessages = {
    'Username': {
      'required':      'User Name is required.',
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm()
  {
    this.userForm = this.fb.group(
      {
        username: '',
        password: ''
      }
    );
  }

  onSubmit() {
    this.user = this.userForm.value;
    console.log(this.user);

    let validUser:boolean = true;
    //authenticate the user
    if(validUser)
      this.router.navigateByUrl('/home');
    this.userForm.reset();
  }
};
