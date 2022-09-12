import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder) {
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
    this.userForm.reset();
  }

  

}
