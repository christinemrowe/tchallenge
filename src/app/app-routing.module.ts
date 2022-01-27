import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; 
import { CreateRoomComponent } from './room/create-room/create-room.component';


const routes: Routes = [
  { path: 'create-room', component: CreateRoomComponent },
  { path: '',   redirectTo: 'create-room', pathMatch: 'full' }, // redirect to create rooms as the first page
  { path: '**', redirectTo: 'create-room', pathMatch: 'full' },
];

@NgModule({

  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],

})
export class AppRoutingModule { }