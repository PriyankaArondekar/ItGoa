import { Injectable } from '@angular/core';
import { ApplicationUrls } from '../shared/application-urls';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private router: Router) { }


   userSignup(data) {
      return this.http.post(ApplicationUrls.user.signup, data).pipe(
        map (res => {
          return res;
        })
    );
  }
}
