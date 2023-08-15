import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  status: string = '';
  showStatus: boolean = false;
  constructor(private _us: UsersService) {}
  onFormSubmit(form: NgForm) {
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
      this.status = 'Password and Confirm Password do not match';
      this.showStatus = true;
    }
  }
}
