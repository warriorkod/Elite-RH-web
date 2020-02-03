
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { mergeMap, map, filter } from 'rxjs/operators';
import * as firebase from 'firebase';



@Injectable()
export class SessionService {


  constructor(protected _http: HttpClient, private _router: Router) {

  }

  createNewUser(formValue) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(formValue.email, formValue.password).then(
          (data) => {
            console.log(data);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  } 

  signInUser(formValue) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(formValue.email, formValue.password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}