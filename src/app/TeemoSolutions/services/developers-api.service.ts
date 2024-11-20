import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Developer } from '../models/developer.entitiy';

@Injectable({
  providedIn: 'root'
})
export class DevelopersApiService {
  private apiUrl = 'http://localhost:3000/developers';

  constructor(private http: HttpClient) {}

  post(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(this.apiUrl, developer);
  }
}
