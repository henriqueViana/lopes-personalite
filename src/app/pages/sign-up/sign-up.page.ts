import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service'

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
    private signupService: SignupService
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
    console.log(this.signupForm)
    this.signupService.signup(this.signupForm.value).subscribe(res => { 
      console.log(res)
      this.router.navigate(['/lead-tabs'])
    })
  }

}
