import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service'
import { UserService } from '../../services/user/user.service'
import { LoadingService } from '../../helpers/loading/loading.service'
import { AlertService } from '../../helpers/alert/alert.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) { 
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginForm.value)
      .subscribe(res => { 
        this.userService.setUser(res.data)
        this.router.navigate(['/lead-tabs'])
      }, err => {
        this.alertService.alert('Login Inválido', 'Usuário e/ou senha incorretos')
        console.log(err)
      })
  }

  cadastrar() {
    this.router.navigate(['/sign-up'])
  }

}
