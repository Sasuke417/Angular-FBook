import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private apiUrl = 'http://3.17.216.66:3000/files/';
  constructor(private http: HttpClient) {}

  uploadFile(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('picture', file, file.name);
    return this.http.post<any>(this.apiUrl + 'uploadfile', formData);
  }
  getFile(fileId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + fileId, {"responseType":'blob' as 'json'});
  }
}
