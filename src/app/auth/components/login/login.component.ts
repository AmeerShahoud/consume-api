import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError, of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  onLogin() {
    this.authService
      .login('cdiadmin', 'P@ssw0rd')
      .pipe(
        catchError((err) => {
          this.snackBar.open('login failed, Check Console');
          console.log('login failed', err);
          return of();
        })
      )
      .subscribe((res) => {
        this.snackBar.open('login success, Check Console');
        console.log('login success', res);
      });
  }
}
