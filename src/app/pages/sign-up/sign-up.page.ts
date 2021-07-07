import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service'
import { UserService } from '../../services/user/user.service'
import { LoadingService } from '../../helpers/loading/loading.service'
import { AlertService } from '../../helpers/alert/alert.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  private signupForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signupService: SignupService,
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) { 
    this.signupForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      areaAtendimento: ['', [Validators.required]],
      tipoImovel: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  signup() {
    this.loadingService.present()

    this.signupService.signup(this.signupForm.value)
      .subscribe(res => { 
        this.loadingService.dismiss()
        this.userService.setUser(res.data)
        this.router.navigate(['/lead-tabs'])
      }, err => {
        this.loadingService.dismiss()
        this.alertService.alert('Erro', 'Erro ao cadastrar, tente novamente mais tarde')
        console.log(err)
      })
  }

}
