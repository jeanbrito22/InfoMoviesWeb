import { Injectable } from '@angular/core';
import {
    HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest
} from '@angular/common/http';


import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingIndicatorService } from './loading-indicator.service';


@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}
  
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // emit onStarted event before request execution
    this.loadingIndicatorService.onStarted(req);
    
    return next
      .handle(req)
      // emit onFinished event after request execution
      .pipe(finalize(() => this.loadingIndicatorService.onFinished(req)));
  }
  
}