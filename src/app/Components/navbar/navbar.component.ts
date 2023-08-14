import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  authenticated: boolean = false;
  constructor(private router: Router) {}
  logout() {
    this.authenticated = false;
    this.router.navigate(['/']);
  }
  onLogoClick() {
    this.router.navigate([this.authenticated ? '/home' : '/']);
  }
}
