import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../app/constants';

import User from '../_models/user';
import Device from '../_models/device';
import Room from '../_models/room';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  public rooms: Room[] = [];

  constructor(private http: HttpClient) { }

  createNewRoom( id: Number, name: string ): Observable<any> {
    return this.http.post(Constants.CREATE_ROOM_API_URL, {
      id,
      name,
    }, httpOptions);
  }

  removeRoom( room: Object ): Observable<any> {
    return this.http.post(Constants.REMOVE_ROOM_API_URL, {
      room
    }, httpOptions);
  }

  inviteUser(username: string): void {
    this.http.post(Constants. INVITE_USER_API_URL, {
      username,
    }, httpOptions);
  }
}