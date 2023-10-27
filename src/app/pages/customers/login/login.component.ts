import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  onSubmit(loginForm: Login) {
    if (this.loginService.verifyCredentials(loginForm.email, loginForm.password)) {
      this.router.navigate(['customer-list'])
    } else {
      this.toastr.error('Usuário ou senha incorretos')
      this.loginForm.reset();
    }
  }

  ngOnInit(): void { }


}
