import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmailTemplateService } from '../../services/email-template/email-template.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmailTemplate } from '../../models/email-template';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css'],
})
export class EmailTemplateComponent {
  idControl = new FormControl('', { nonNullable: true });
  constructor(
    private emailTemplateService: EmailTemplateService,
    private snackBar: MatSnackBar
  ) {}

  // you should change data for each run of Post, Put requests
  private _myEmailTemplateCreate: Partial<IEmailTemplate> = {
    arName: 'ameer adsdfr',
    enName: 'shahoud aasd',
    arSubjectTemplate: 'string',
    arBodyTemplate: 'string',
    enSubjectTemplate: 'string',
    enBodyTemplate: 'string',
    status: true,
    isGlobal: true,
  };

  private _myEmailTemplateUpdate: Partial<IEmailTemplate> = {
    updatedBy: 0,
    updatedOn: '2023-04-13T21:41:54.800Z',
    clientData: 'string',
    id: 0,
    arName: 'string',
    enName: 'string',
    status: true,
    isGlobal: true,
    enSubjectTemplate: 'string',
    enBodyTemplate: 'string',
    arSubjectTemplate: 'string',
    arBodyTemplate: 'string',
  };

  onReadById() {
    this.emailTemplateService
      .readById(this.idControl.value)
      .pipe(
        catchError(this._errorHandler('Reading email template by id failed'))
      )
      .subscribe(this._successHandler('Reading email template by id succeed'));
  }
  onReadAll() {
    this.emailTemplateService
      .readAll()
      .pipe(
        catchError(this._errorHandler('Reading all email templates failed'))
      )
      .subscribe(this._successHandler('Reading all email templates succeed'));
  }
  onCreate() {
    this.emailTemplateService
      .create(this._myEmailTemplateCreate)
      .pipe(catchError(this._errorHandler('Creating email template failed')))
      .subscribe(this._successHandler('Creating email template succeed'));
  }
  onUpdate() {
    this.emailTemplateService
      .update(this._myEmailTemplateUpdate)
      .pipe(catchError(this._errorHandler('Updating email template failed')))
      .subscribe(this._successHandler('Updating email template succeed'));
  }
  onDelete() {
    this.emailTemplateService
      .delete(this.idControl.value)
      .pipe(
        catchError(this._errorHandler('Deleting email template by id failed'))
      )
      .subscribe(this._successHandler('Deleting email template by id succeed'));
  }

  private _successHandler = (message: string) => {
    return (res: any) => {
      this.snackBar.open(`${message}, Check Console`);
      console.log(`${message}`, res);
    };
  };

  private _errorHandler = (message: string) => {
    return (err: Error) => {
      this.snackBar.open(`${message}, Check Console`);
      console.log(`${message}`, err);
      return of();
    };
  };
}
