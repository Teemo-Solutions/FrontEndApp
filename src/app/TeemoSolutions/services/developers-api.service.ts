import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BaseService} from "../../shared/base.service";
import {Developer} from "../models/developer.entitiy";

@Injectable({
  providedIn: 'root'
})
export class DevelopersApiService extends BaseService<Developer>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/teachers';
  }

}
