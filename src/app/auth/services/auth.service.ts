import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap } from 'rxjs';
import { CachingService } from 'src/app/shared/services/caching.service';
import { environment } from 'src/environments/environment.development';

export interface LoginResponse {
  sc: number;
  rs: { token: string };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CachingService {
  constructor(private http: HttpClient) {
    super();
    this.removeItem('token');
  }

  login(userName: string, password: string) {
    const reqBody = { lang: 'AR', userName: userName, userPassword: password };
    return this.http
      .post<LoginResponse>(
        environment.api.authUrl + '/login',
        JSON.stringify(reqBody)
      )
      .pipe(tap((res) => this.setItem('token', res.rs.token)));
  }

  getToken() {
    return this.getItem<string>('token');
  }
}
