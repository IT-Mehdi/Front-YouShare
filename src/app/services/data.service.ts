import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import {AuthService} from "./auth.service";
import {User} from "../models/user.model";

const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient,
    private auth: AuthService,
  ) { }

  getUserLoggedIn(){
    return this._http.get<JSON>(`${this.apiUrl}users`)
  }

  updateUser(userObj: any){
    return this._http.put<any>(`${this.apiUrl}users`, userObj);
  }

  getFriends(){
    return this._http.get<User[]>(`${this.apiUrl}friends`);
  }

  getFriendRequests(){
    return this._http.get<User[]>(`${this.apiUrl}friends/requests`);
  }

  acceptFriendRequest(idUser) {
    // @ts-ignore
    this._http.post(`${this.apiUrl}friends/${idUser}/accept`);
  }

  refuseFriendRequest(idUser) {
    // @ts-ignore
    this._http.post(`${this.apiUrl}friends/${idUser}/refuse`);
  }
}
