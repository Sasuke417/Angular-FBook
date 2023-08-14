import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/Services/friends.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit  {
  networkList: any;
  constructor(private _fs: FriendsService) {}
  ngOnInit(): void {
    this.fetchAllUsers();
  }
  fetchAllUsers() {
    this._fs.getAll().subscribe(
      (data) => {
        this.networkList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
