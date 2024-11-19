import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BaseService} from "../../shared/base.service";
import {Gamer} from "../models/gamer.entity";

@Injectable({
  providedIn: 'root'
})
export class GamersApiService extends BaseService<Gamer>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/students';
  }

  getByUserId(userId: string) {
    return this._http.get<Gamer>(`${this.resourcePath()}?user_id=${userId}`);
  }
}
