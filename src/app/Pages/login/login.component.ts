import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _us: UsersService, private router: Router) {}
  onFormSubmit(form: any) {
    this._us.authenticate(form.value).subscribe(
      (data) => {
        this.router.navigate(['/home']);
        this._us.setAuthentication(true);
      },
      (error) => {
        console.error(error);
        this._us.setAuthentication(false);
      }
    );
  }
}
