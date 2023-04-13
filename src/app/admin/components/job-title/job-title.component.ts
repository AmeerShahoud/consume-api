import { Component } from '@angular/core';
import { JobTitleService } from '../../services/job-title/job-title.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of, tap } from 'rxjs';
import { IJobTitle } from '../../models/job-title';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css'],
})
export class JobTitleComponent {
  idControl = new FormControl('', { nonNullable: true });
  constructor(
    private jobTitleService: JobTitleService,
    private snackBar: MatSnackBar
  ) {}

  // you should change data for each run of Post, Put requests
  private _myJobTitleCreate: Partial<IJobTitle> = {
    arName: 'ameer afdssd3',
    enName: 'shahoud asfdsd3',
    status: 0,
    isSystem: false,
  };
  private _myJobTitleUpdate: Partial<IJobTitle> = {
    updatedBy: 0,
    updatedOn: '2023-04-13T21:03:37.099Z',
    clientData: 'string',
    arName: 'asasas',
    enName: 'asasas',
    status: 0,
    statusDateModified: '2023-04-13T21:03:37.099Z',
    jobType: 0,
    isSystem: true,
    statusInfo: {
      arName: 'asas',
      enName: 'asas',
      id: 0,
      fnId: 'asas',
      parent: 0,
    },
    typeInfo: {
      arName: 'asas',
      enName: 'asas',
      id: 0,
      fnId: 'asas',
      parent: 0,
    },
    id: 0,
  };

  onReadById() {
    this.jobTitleService
      .readById(this.idControl.value)
      .pipe(catchError(this._errorHandler('Reading job title by id failed')))
      .subscribe(this._successHandler('Reading job title by id succeed'));
  }
  onReadAll() {
    this.jobTitleService
      .readAll()
      .pipe(catchError(this._errorHandler('Reading all job titles failed')))
      .subscribe(this._successHandler('Reading all job titles succeed'));
  }
  onCreate() {
    this.jobTitleService
      .create(this._myJobTitleCreate)
      .pipe(catchError(this._errorHandler('Creating job title failed')))
      .subscribe(this._successHandler('Creating job title succeed'));
  }
  onUpdate() {
    this.jobTitleService
      .update(this._myJobTitleUpdate)
      .pipe(catchError(this._errorHandler('Updating job title failed')))
      .subscribe(this._successHandler('Updating job title succeed'));
  }
  onDelete() {
    this.jobTitleService
      .delete(this.idControl.value)
      .pipe(catchError(this._errorHandler('Deleting job title by id failed')))
      .subscribe(this._successHandler('Deleting job title by id succeed'));
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
