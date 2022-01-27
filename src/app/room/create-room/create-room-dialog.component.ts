import { Component, OnInit, Inject } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { CreateRoomComponent } from './create-room.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData { 
 roomID: number;
 roomName: string;
}

@Component({
    selector: 'app-create-room-dialog',
    templateUrl: './create-room-dialog.component.html',
    styleUrls: ['./create-room-dialog.component.less']
})

export class CreateRoomDialog implements OnInit {
  
  roomID: number;
  roomName: string;

  constructor(
      public roomService:RoomService,
      public dialogRef: MatDialogRef<CreateRoomComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

  ngOnInit(): void {

  }

    createRoom() {
      this.roomService.createNewRoom(this.roomID, this.roomName);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
  


