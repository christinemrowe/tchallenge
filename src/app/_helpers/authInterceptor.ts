    // import { Injectable } from '@angular/core';
    // import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
    // import { Observable } from 'rxjs';

    // import { AuthService } from '../services/auth.service';

    // @Injectable({
    //     providedIn: 'root',
    //   })

    // export class authInterceptor implements HttpInterceptor  {

    //     constructor(private authService: AuthService) { }

    //     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    //         // Add basic authentication to authorization header

    //         const currentUser = this.authService.currentUserValue;
    //         if (currentUser && currentUser.authdata) {
    //             req = req.clone({
    //                 setHeaders: { 
    //                     Authorization: `Basic ${currentUser.authdata}`
    //                 }
    //             });
    //         }

    //         return next.handle(req);
    //     }
    // }
