import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/Services/friends.service';

@Component({
  selector: 'app-network-user',
  templateUrl: './network-user.component.html',
  styleUrls: ['./network-user.component.scss'],
})
export class NetworkUserComponent {
  @Input() requestStatus = '';
  @Input() friendIndex = '';
  @Input() userId = '';
  requestRender = false;
  status: string = '';
  showStatus: boolean = false;
  routerUrl: string;
  // constructor(private router: Router) {
  //   this.requestRender = this.router.url == '/network';
  // }
  constructor(private _fs: FriendsService, private router: Router) {
    this.routerUrl = this.router.url;
  }
  sendRequest() {
    if (
      // this.requestStatus == 'Send Request' &&
      this.userId != '' &&
      this.routerUrl == '/network'
    ) {
      this._fs.createFreindRequest(this.userId).subscribe(
        (data) => {
          //console.log(data);
          this.requestStatus = 'Request Pending';
          this.status = 'Request sent';
          this.showStatus = true;
        },
        (error) => {
          this.status = 'some error occurred while sending request';
          this.showStatus = true;
          console.error(error);
        }
      );
    }
  }
}
