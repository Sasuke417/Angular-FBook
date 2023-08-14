import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private apiUrl = 'http://3.17.216.66:3000/friends/';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
