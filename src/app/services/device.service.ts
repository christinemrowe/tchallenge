import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../app/constants';
import Device from '../_models/device';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  public devices: Device[];

  constructor(private http: HttpClient) { }

  addNewDeviceToOrg(deviceID:string, organisationID:string):void {
    this.http.post(Constants.ADD_NEW_DEVICE_API_URL, {
        deviceID,
        organisationID
        }, httpOptions);
    }

  assignDeviceToRoom(roomID:string, devices:Object[]):void {
    this.http.post(Constants.ASSIGN_DEVICE_API_URL, {
        roomID,
        devices
    }, httpOptions);
  }
}