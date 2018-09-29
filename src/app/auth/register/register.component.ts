import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  passwordConf;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new UserModel();
    this.passwordConf = '';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.user).subscribe(
      (response: HttpResponse<User>) => { console.log(response); },
      (error: string) => {console.log(error); },
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
      }
    );
  }

  validateForm() {}

}
