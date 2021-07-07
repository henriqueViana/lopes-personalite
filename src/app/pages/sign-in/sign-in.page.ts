import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { 
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(res => console.log(res))
  }

}
