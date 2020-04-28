import {Injectable} from '@angular/core';
import {ToastyService} from 'ng2-toasty';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastyService: ToastyService) {
  }

  /**
   * Add a toast with an error message
   * @param errorMessage to display
   */
  addErrorToast(errorMessage: string) {

    this.toastyService.error({
      title: 'Error',
      msg: errorMessage,
      showClose: true,
      timeout: 5000,
      theme: 'bootstrap'
    });
  }

  /**
   * Add a toast with a success message
   * @param successMessage to display
   */
  addSuccessToast(successMessage: string) {
    this.toastyService.success({
      title: 'Success',
      msg: successMessage,
      showClose: true,
      timeout: 5000,
      theme: 'bootstrap'
    });
  }
}
