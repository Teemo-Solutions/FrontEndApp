import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gamer } from '../models/gamer.entity';

@Injectable({
  providedIn: 'root'
})
export class GamersApiService {
  private apiUrl = 'http://localhost:3000/gamers';

  constructor(private http: HttpClient) {}

  post(gamer: Gamer): Observable<Gamer> {
    return this.http.post<Gamer>(this.apiUrl, gamer);
  }
}
