import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _us: UsersService){};
  onFormSubmit(form: any) {
    console.log(form.value);
    this._us.authenticate(form.value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.error(error)
    );
  }
}
