import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/Services/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  friendsList: any;
  status = 'Loading....';
  showStatus = true;
  constructor(private _fs: FriendsService) {}
  ngOnInit(): void {
    this.fetchFriendsList();
  }
  fetchFriendsList() {
    this._fs.getAll().subscribe(
      (data) => {
        this.showStatus = false;
        this.status = '';
        this.friendsList = data.filter(
          (row: any) => row.status == 'You are friend'
        );
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
