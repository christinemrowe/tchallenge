import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { CreateRoomDialog } from './create-room-dialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface DialogData { 
 roomID: number;
 roomName: string;
}

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html', 
  styleUrls: ['./create-room.component.less']
})

export class CreateRoomComponent implements OnInit {
  
  roomID: number;
  roomName: string;
  
  // hasRooms:boolean = this.roomService.rooms?.length > 0;
  hasRooms = true; // for simplicity

  constructor(
      public roomService:RoomService,
      public dialog: MatDialog,
    ) {}

  ngOnInit(): void {

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateRoomDialog, {
      height: '400px',
      width: '300px',
      data: {roomID: this.roomID, roomName: this.roomName},
    });

    dialogRef.afterClosed().subscribe(result => {
      let res = this.roomService.createNewRoom(result.roomID, result.roomName);
      res.subscribe(() => {
          // this.cdr.detectChanges();
      });
    });
  }
}
