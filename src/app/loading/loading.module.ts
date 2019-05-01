import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorService } from './loading-indicator.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIndicatorInterceptor } from './loading-indicator.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (service: LoadingIndicatorService) => new LoadingIndicatorInterceptor(service),
      multi: true,
      deps: [LoadingIndicatorService]
    }
],
exports: [
  LoadingSpinnerComponent
]
})
export class LoadingModule { }
