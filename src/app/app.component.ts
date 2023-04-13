import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { switchMap } from 'rxjs';
import { JobTitleService } from './admin/services/job-title/job-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
