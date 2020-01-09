import { HttpClient, HttpHeaders } from "@angular/common/http";
import { share } from 'rxjs/operators';


export class BaseService {

  constructor(protected _http: HttpClient) { }

  getRequest(url) {
    return this._http.get(url);
  }


  autthentificate(url, params){
    return this._http.post(url, params);
  }

  postRequest(url, params, backend: boolean = true) {
    return this._http.post(url, params);
  }


  redirect() {
    localStorage.clear();
    if (window.location.pathname !== '/sign_in') {
      window.location.href = '/sign_in';
    }
  }

}