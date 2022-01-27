import { of, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export default class httpResponses {
    ok(body?) {
        return of(new HttpResponse({ status: 200, body }))
    }

    error(message) {
        return throwError({ error: { message } });
    }

    unauthorized() {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }
}
