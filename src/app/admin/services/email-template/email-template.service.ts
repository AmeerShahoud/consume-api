import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.abstract.service';
import { environment } from 'src/environments/environment.development';
import { IEmailTemplate } from '../../models/email-template';

@Injectable({
  providedIn: 'root',
})
export class EmailTemplateService extends CrudService<IEmailTemplate> {
  constructor(http: HttpClient) {
    super(http, environment.api.emailTemplateUrl);
  }
}
