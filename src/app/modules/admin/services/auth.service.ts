import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { LoginResponse } from '../models/login-response'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

  //apiUrl = 'http://192.168.1.5:5001/login';

  apiUrl = 'http://qualitics-report-back.opengeode.sn/login';

  response : LoginResponse;
  token : String;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private _http : HttpClient) { }

  checkConnect(user){
    return this._http.post<LoginResponse>(this.apiUrl, user, this.httpOptions).toPromise();
  }

  isUserconnected(){
    if(localStorage.getItem('token'))
      return true;
    return false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



  setToken(token){
    this.token = token;
  }
}
