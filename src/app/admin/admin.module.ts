import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobTitleComponent } from './components/job-title/job-title.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [JobTitleComponent, EmailTemplateComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [JobTitleComponent, EmailTemplateComponent],
})
export class AdminModule {}
