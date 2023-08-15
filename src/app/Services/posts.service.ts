import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://3.17.216.66:3000/posts/';
  constructor(private http: HttpClient) {}
  create(postInput: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'createpost', postInput);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
