import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  status = '';
  showStatus = false;
  constructor(private _us: UsersService) {}
  onFormSubmit(form: any) {
    if (form.value.password == form.value.cPassword) {
      this._us
        .update({
          password: form.value.password,
        })
        .subscribe(
          (data) => {
            this.status = 'Password updated successfully';
            this.showStatus = true;
          },
          (error) => {
            this.status = 'An error occured while updating the password';
            this.showStatus = true;
            console.error(error);
          }
        );
    } else {
      this.status = 'Password and Confirm Password must be same';
      this.showStatus = true;
    }
  }
}
