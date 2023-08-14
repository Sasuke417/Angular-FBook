import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://3.17.216.66:3000/posts/';
  constructor(private http: HttpClient) {}
  create(postInput: string): Observable<any> {
    const post = {
      post: postInput,
    };
    return this.http.post<any>(this.apiUrl + 'createpost', post);
  }
}
