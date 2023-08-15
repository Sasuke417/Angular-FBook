import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  status: string = '';
  showStatus: boolean = false;
  constructor(private _us: UsersService, private router: Router) {}
  onFormSubmit(form: any) {
    this._us.findUserByEmail(form.value.email).subscribe(
      (data) => {
        if(data.length>0){
          if(data[0].dob.split("T")[0] == form.value.DOB){
            this._us.setUserData(data[0]);
            localStorage.setItem('id_token', data[0].token);
            this.router.navigate(['/resetPassword'])
          }else{
            this.status = "Date of Birth don't match";
            this.showStatus = true;
          }
        }else{
          this.status = "Email not found"
          this.showStatus = true;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
