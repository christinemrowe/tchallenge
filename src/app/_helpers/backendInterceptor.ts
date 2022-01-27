import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import httpResponses from '../_helpers/httpResponses';
import { RoomService } from '../services/room.service';
import { DeviceService } from '../services/device.service';

@Injectable({
    providedIn: 'root',
  })

export class backendInterceptor implements HttpInterceptor  {
    constructor(
        private httpResp: httpResponses,
        private roomService:RoomService,
        private deviceService:DeviceService) { }

        handleRoute(url, body): Observable<HttpEvent<any>> {
            
            if (url.endsWith('device/add')) {
                this.deviceService.devices.push(body);
                return this.httpResp.ok(body);

            } else if (url.endsWith('device/assign')) {
                let room = this.roomService.rooms.find(x => x.id === body.id);

                if(!room) return this.httpResp.error("Room not found!");
                room.devices = body.devices;
                return(this.httpResp.ok(body));

            } else if (url.endsWith('create-room')) { // ideally called something like room/create
                this.roomService.rooms.push(body);
                return this.httpResp.ok(body);

            } else if (url.endsWith(' room/remove')) { 
                let roomIndex = this.roomService.rooms.findIndex(x => x.id === body.id);

                this.roomService.rooms.splice(roomIndex);
                return this.httpResp.ok(body);
               
            } else {                
                // anything not handled let it pass through (for simplicity)
                return this.httpResp.ok(body);
            }    
        }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, body } = req; // destructure what's needed into request

        return this.handleRoute(url, body);
    }
}