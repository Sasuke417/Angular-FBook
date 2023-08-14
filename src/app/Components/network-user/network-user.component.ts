import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-network-user',
  templateUrl: './network-user.component.html',
  styleUrls: ['./network-user.component.scss'],
})
export class NetworkUserComponent {
  @Input() requestStatus = '';
  nthNumber(number: number) {
    if (number > 3 && number < 21) return 'th';
    switch (number % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
