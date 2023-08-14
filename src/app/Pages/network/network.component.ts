import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/Services/friends.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit  {
  networkList: any;
  status = 'Loading....';
  showStatus = true;
  constructor(private _fs: FriendsService) {}
  ngOnInit(): void {
    this.fetchAllUsers();
  }
  fetchAllUsers() {
    this._fs.getAll().subscribe(
      (data) => {
        this.showStatus = false;
        this.status = '';
        this.networkList = data;
      },
      (error) => {
        this.status = 'An error occurred while fetching the posts list!!!';
        console.error(error);
      }
    );
  }
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
