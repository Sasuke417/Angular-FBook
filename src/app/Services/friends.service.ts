import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private apiUrl = 'http://3.17.216.66:3000/friends/';
  constructor(private http: HttpClient, private _us: UsersService) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  createFreindRequest(friendId: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+"createrequest",{
      userId: this._us.getUserData()._id,
      friendId,
      status: "Request Pending",
    });
  }
}
