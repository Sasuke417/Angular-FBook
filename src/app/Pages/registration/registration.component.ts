import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  errorView = false;
  constructor(private router: Router, private _us: UsersService) {}
  navigateToLogin() {
    this.router.navigate(['/']);
  }
  onFormSubmit(form: any) {
    this._us.register(form.value).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorView = true;
        console.error(error);
      }
    );
  }
}
