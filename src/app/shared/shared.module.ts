import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeadersConfigInterceptor } from './interceptors/headers-config.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersConfigInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
