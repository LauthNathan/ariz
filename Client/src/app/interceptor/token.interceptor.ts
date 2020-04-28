import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/do';
import {Router} from '@angular/router';
import {NotificationService} from '../services/notification/notification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private readonly notificationService: NotificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('arizToolToken')}`
      }
    });

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {

      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 401: {
            localStorage.removeItem('arizToolToken');
            this.router.navigate(['login']);
            break;
          }
          case 403:
            this.notificationService.addErrorToast(err.error.message);
            break;

          case 404:
            // Redirect to personal 404 page.
            this.notificationService.addErrorToast('This page doesn\'t exist');
            break;

          case 500:
            this.notificationService.addErrorToast('Internal server error');
            break;

          default :
            this.notificationService.addErrorToast(err.error.message);
        }
      }
    });
  }
}
