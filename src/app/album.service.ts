import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  getAllAlbums() {
    let headers = this.getHeaders();
    return this.http.get('http://3.139.78.127:8080/api/album', { headers });
  }

  getHeaders() {
    let userIdToken = localStorage.getItem('userIdToken') || '';

    let header = {
      idToken: userIdToken,
      accept: '*/*',
    };

    return header;
  }
}
