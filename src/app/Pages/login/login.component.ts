import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginError: boolean = false;

  constructor(private _us: UsersService, private router: Router) {}
  onFormSubmit(form: any) {
    this._us.authenticate(form.value).subscribe(
      (data) => {
        this.loginError = false;
        this._us.setAuthentication(true);
        this._us.setIsAdmin(data.isAdmin);
        this._us.setUserData(data);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loginError = true;
        console.error(error);
        this._us.setAuthentication(false);
      }
    );
  }
  navToForgotPasswordPage(){
    this.router.navigate(['/forgotPassword'])
  }
}
