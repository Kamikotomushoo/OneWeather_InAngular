import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-up',
  templateUrl: './login-up.component.html',
  styleUrls: ['./login-up.component.scss']
})
export class LoginUpComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'inputField': new FormGroup({
        'loginField': new FormControl(null, [Validators.required]),
        'passwordField': new FormControl(null,[Validators.required])
      }),
    });
  }

  OnSubmit(){
    this.router.navigate(['/oneweather']);
  }

}
