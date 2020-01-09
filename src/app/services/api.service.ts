
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { mergeMap, map, filter } from 'rxjs/operators';


@Injectable()
export class SessionService extends BaseService {

  redirect_url: string;

  private eclipseId = new BehaviorSubject(null);
  currentId = this.eclipseId.asObservable();
  private missionId = new BehaviorSubject(null);
  currentMissionId = this.missionId.asObservable();
  private face = new BehaviorSubject(null);
  currentFace = this.face.asObservable();
  private langage = new BehaviorSubject(null);
  currentLangage = this.langage.asObservable();
  private isEmptyFace = new BehaviorSubject(null);
  currentIsEmpty = this.isEmptyFace.asObservable();
  private altitude = new BehaviorSubject(null);
  currentAltitude = this.altitude.asObservable();
  private bounds = new BehaviorSubject(null);
  currentBounds = this.bounds.asObservable();
  private mission = new BehaviorSubject(null);
  currentMission = this.mission.asObservable();
  private canlaunch = new BehaviorSubject(null);
  currentCanLaunch = this.canlaunch.asObservable();
  private cachedInfra = new BehaviorSubject(null);
  currentCachedInfra = this.cachedInfra.asObservable();

  constructor(protected _http: HttpClient, private _router: Router) {
    super(_http);
    this.langage = new BehaviorSubject('fr');
    this.currentLangage =  this.langage.asObservable();
    this.altitude = new BehaviorSubject(JSON.parse(localStorage.getItem('range')));
    this.currentAltitude =  this.altitude.asObservable();
    this.bounds = new BehaviorSubject(JSON.parse(localStorage.getItem('bounds')));
    this.currentBounds = this.bounds.asObservable();
    this.eclipseId = new BehaviorSubject(JSON.parse(localStorage.getItem('eclipseId')));
    this.currentId = this.eclipseId.asObservable();
    this.missionId = new BehaviorSubject(JSON.parse(localStorage.getItem('missionId')));
    this.currentMissionId = this.missionId.asObservable();
    this.mission = new BehaviorSubject(JSON.parse(localStorage.getItem('mission')));
    this.currentMission = this.mission.asObservable();
    this.cachedInfra = new BehaviorSubject(JSON.parse(localStorage.getItem('cachedInfra')));
    this.currentCachedInfra = this.cachedInfra.asObservable();
  }

  isLogged() {
      
    return false;
  }


  getEclipseImage(id, missionID){
    let param = {
      'id': id,
      'missionID': missionID
    }
    const url = `${environment.SRV_URL_TEST}/report/photoID`;
    return this.postRequest(url, param);
  }
  

  getAllMissions(){
    const url = `${environment.SRV_URL_TEST}/missions`;
    return this.getRequest(url);
  }

  getPylone(missionID){
    const url = `${environment.SRV_URL_TEST}/report/face/${missionID}`;
    return this.getRequest(url);

  }

  getJsonShemaForm(missionID){
    const url = `${environment.SRV_URL_TEST}/form/schema/${missionID}`;
    return this.getRequest(url);
  }

  getDataForm(missionID, id){
    let param = {
      'id': id,
      'missionID': missionID
    }
    const url = `${environment.SRV_URL_TEST}/form/get-report-data`;
    return this.postRequest(url, param);
  }

  getMosaiqueImage(missionID){
    const url = `${environment.SRV_URL_TEST}/report/mosaique/${missionID}`;
    return this.getRequest(url);

  }

  getStat(missionID){
    const url = `${environment.SRV_URL_TEST}/missions/state/${missionID}`;
    return this.getRequest(url);
  }

  destroyAuth() {
    localStorage.clear();
    this._router.navigateByUrl('sign_in');
  }

  changEclipseId(id?: string) {
    if(id){
      localStorage.setItem('eclipseId', JSON.stringify(id));
    }
    this.eclipseId.next(JSON.parse(localStorage.getItem('eclipseId')));
  }

  changeMissionId(id?: string) {
    if(id){
      localStorage.setItem('missionId', JSON.stringify(id));
    }
    this.missionId.next(JSON.parse(localStorage.getItem('missionId')));
  }

  changeFace(face: string) {
    this.face.next(face);
  }

  changeLangage(langage: string) {
    this.langage.next(langage);
  }

  changeIsEmpty(value: boolean) {
    this.isEmptyFace.next(value);
  }

  changeBounds(value) {
    this.bounds.next(value);
    localStorage.setItem('bounds', JSON.stringify(value));
  }

  changeAltitude(value: object) {
    this.altitude.next(value);
    localStorage.setItem('range', JSON.stringify(value));
  }

  changeMission(value) {
    this.mission.next(value);
    localStorage.setItem('mission', JSON.stringify(value));
  }

  changeCanLaunch(value) {
    this.canlaunch.next(value);
  }

  changeCachedInfra(value) {
    this.cachedInfra.next(value);
    localStorage.setItem('cachedInfra', JSON.stringify(value));
  }

  geToken(){
    return localStorage.getItem('currentUser');
  }

  noDamage(id, missionID){
    let param = {
      'id': id,
      'missionId': missionID
    }
    const url = `${environment.SRV_URL_TEST}/form/no-dagamage`;
    return this.postRequest(url, param);
  }

  clearAll() {
    this.altitude.next(null);
    localStorage.setItem('range', null);
   }
  



}