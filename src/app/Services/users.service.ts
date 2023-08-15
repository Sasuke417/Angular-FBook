import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://3.17.216.66:3000/users/';
  public authenticated = false;
  private isAdmin = false;
  userData: any;

  constructor(private http: HttpClient) {}

  register(newUser: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register', newUser);
  }

  findUserByEmail(email: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'finduserbyemail', { email });
  }
  isAuthenticated() {
    return this.authenticated;
  }

  setAuthentication(auth: boolean) {
    this.authenticated = auth;
  }

  authenticate(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'authenticate', user).pipe(
      tap((res: any) => this.setSession(res)),
      shareReplay()
    );
  }
  private setSession(authResult: any) {
    localStorage.setItem('id_token', authResult.token);
  }

  setIsAdmin(value: boolean) {
    this.isAdmin = value;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  update(newUser: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + this.userData._id, newUser);
  }
}
