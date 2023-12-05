import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});

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

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
