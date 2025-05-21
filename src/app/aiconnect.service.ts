import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiconnectService {

  constructor(private http: HttpClient) {}

  fetchImages(searchTerm: string): Observable<any> {
    const url = `http://localhost:4550/api?query=${searchTerm}`;
    return this.http.get<any>(url);
  }
}