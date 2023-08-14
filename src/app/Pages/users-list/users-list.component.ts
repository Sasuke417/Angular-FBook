import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: any;
  constructor(private _us: UsersService) {}
  ngOnInit(): void {
    this.fetchAllUsers();
  }
  fetchAllUsers() {
    this._us.getAll().subscribe(
      (data) => {
        // console.log(data);
        this.usersList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
