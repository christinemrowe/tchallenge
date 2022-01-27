import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor() { }

  title = 'Tech Challenge';
}
