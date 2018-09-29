import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  isAuthenticated: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.username = this.authService.getUsername();
    this.authService.usernameUpdated.subscribe(
      (username: string) => {
        this.username = username;
      }
    );
    this.authService.authenticatedUpdated.subscribe(
      (isAuth: boolean) => { this.isAuthenticated = isAuth; }
    );
    // this.username = this.authService.getUsername();
    /// this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.isAuthenticated = this.authService.isAuthenticated();
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
