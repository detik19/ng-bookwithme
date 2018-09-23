import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  passwordConf;

  constructor() {
    this.user = new UserModel();
    this.passwordConf = '';
  }

  ngOnInit() {
  }

  onSubmit() {}

}
