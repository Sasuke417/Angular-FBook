import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent {
  status = '';
  showStatus = false;
  constructor(private _us: UsersService) {}
  onFormSubmit(form: any) {
    if(form.value.DOB){
      form.value.DOB = new Date(form.value.DOB).toLocaleDateString('en-GB');
    }
    this._us.update(form.value).subscribe(
      (data) => {
        this.status = 'Profile updated successfully';
        this.showStatus = true;
      },
      (error) => {
        this.status = 'An error occured while updating the profile';
        this.showStatus = true;
        console.error(error);
      }
    );
  }
}
