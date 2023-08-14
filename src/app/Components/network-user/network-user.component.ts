import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-user',
  templateUrl: './network-user.component.html',
  styleUrls: ['./network-user.component.scss'],
})
export class NetworkUserComponent {
  @Input() requestStatus = '';
  @Input() friendIndex = '';
  requestRender = false;
  constructor(private router: Router) {
    this.requestRender = this.router.url == '/network';
  }
}
