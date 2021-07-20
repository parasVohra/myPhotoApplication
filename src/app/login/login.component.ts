import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInFormVisible = true;

  isLoggedIn = false;

  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  makeSignInFormVisible() {
    this.signInFormVisible = true;
  }
  makeSignUpFormVisible() {
    this.signInFormVisible = false;
  }

  login() {
    this.userService.login(this.email, this.password);
    this.email = '';
    this.password = '';
    this.isLoggedIn = true;
  }

  signUp() {
    this.userService.signup(this.email, this.password);
    this.isLoggedIn = true;
    this.email = '';
    this.password = '';
  }
  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
  }
}
