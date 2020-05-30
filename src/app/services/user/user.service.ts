import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto, UserToCreateDto} from '../../../model';
import {ApiInformation} from '../../utils/api-information';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  /**
   * Function to authenticate a user, it return a JWT.
   *
   * @param user - The username and password of the user.
   */
  login(user: LoginDto): Promise<{ token }> {
    return new Promise<{ token }>((resolve, reject) => {
      this.http.post<{ token }>(`${ApiInformation.API_ENDPOINT}login`, user)
        .subscribe(res => {
            localStorage.setItem('arizToolToken', res.token);
            resolve(res);
          },
          error => {
            reject(error);
          });
    });
  }

  /**
   * Create a new user, in the database.
   *
   * @param userToCreate - The new user to create.
   */
  signUp(userToCreate: UserToCreateDto): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(`${ApiInformation.API_ENDPOINT}register`, userToCreate)
        .subscribe(() => {
            resolve();
          },
          error => {
            reject(error);
          });
    });
  }
}
