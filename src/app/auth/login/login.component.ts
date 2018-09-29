import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.user = new UserModel();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  isValidInput(field: string): boolean {
    const invalid = this.loginForm.controls[field].invalid &&
    (this.loginForm.controls[field].dirty ||
      this.loginForm.controls[field].touched);
    return !invalid;
  }
  isRequired(fieldName: string): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }
  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {console.log(response); },
      (err) => { console.log(err); },
      () => {
        this.router.navigate(['/rentals']);
      }
    );
  }
}
