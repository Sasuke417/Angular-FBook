import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://3.17.216.66:3000/users';

  constructor(private http: HttpClient) {}

  register(newUser: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/register', newUser);
  }
  
  authenticate(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/authenticate', user);
  }
}
