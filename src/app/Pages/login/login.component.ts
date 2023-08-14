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
        // console.log({data})
        this._us.setAuthentication(true);
        this._us.setIsAdmin(data.isAdmin)
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error(error);
        this._us.setAuthentication(false);
      }
    );
  }
}
