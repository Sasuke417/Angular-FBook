import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, public _us:UsersService) {}

 
  logout() {
    this.router.navigate(['/']);
    this._us.setAuthentication(false);
  }
  onLogoClick() {
    this.router.navigate([this._us.isAuthenticated() ? '/home' : '/']);
  }
}
