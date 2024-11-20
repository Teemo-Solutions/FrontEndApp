import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  post(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
