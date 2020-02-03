import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MissionResponse } from '../models/mission-response';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private _http : HttpClient) { }

  apiUrl = "http://192.168.1.5:5001/missions"

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization' : localStorage.getItem('token'),
      'Content-Type':  'application/json'
    })
  }

  getMissions(){
    return this._http.get(this.apiUrl, this.httpOptions).toPromise();
  }
}
