import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    public accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    let storedUser = localStorage.getItem('user');

    if (storedUser !== null) {
      let userObject = JSON.parse(storedUser);
      if (!this.accountService.isTokenExpired(userObject.token)) {
        this.router.navigateByUrl('/dashboard');
      }
    }
    this.initializeForm();
  }

  login() {
    for (var i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsTouched();
    }

    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (_) => {
          this.router.navigateByUrl('/dashboard');
        },
      });
    }
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
