import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}



// @Component({ templateUrl: 'home.component.html' })
// export class HomeComponent {
//     loading = false;
//     users: User[];

//     constructor(private userService: UserService) { }

//     ngOnInit() {
//         this.loading = true;
//         this.userService.getAll().pipe(first()).subscribe(users => {
//             this.loading = false;
//             this.users = users;
//         });
//     }

