import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.abstract.service';
import { IJobTitle } from '../../models/job-title';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class JobTitleService extends CrudService<IJobTitle> {
  constructor(http: HttpClient) {
    super(http, environment.api.jobTitleUrl);
  }
}
