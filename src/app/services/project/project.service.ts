import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiInformation} from '../../utils/api-information';
import {ProjectStepOne} from '../../../model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get all projects of authenticated user.
   */
  getAllProjectAuthenticatedUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get<any>(`${ApiInformation.API_ENDPOINT}${ApiInformation.PROJECT_ENDPOINT}`)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  /**
   * Get one project of authenticated user.
   *
   * @param projectId - the id of the project to get.
   */
  getOneProjectAuthenticatedUser(projectId: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get<any>(`${ApiInformation.API_ENDPOINT}${ApiInformation.PROJECT_ENDPOINT}${projectId}`)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  /**
   * TODO : Changer cette route.
   * Create a new project for the authenticated user.
   *
   * @param projectTitle - The title of the project to create.
   */
  createProjectAuthenticatedUser(projectTitle: string): Promise<any> {
    const body = {
      projectTitle
    };

    return new Promise<any>((resolve, reject) => {
      this.http.post<any>(`${ApiInformation.API_ENDPOINT}${ApiInformation.PROJECT_ENDPOINT}`,
        body)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  /**
   * TODO : faire la doc
   *
   * @param projectId - The id of the project.
   * @param projectStepOne - The step one of the project to save.
   */
  updateProjectStepOne(projectId: string, projectStepOne: ProjectStepOne): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post<any>(`${ApiInformation.API_ENDPOINT}${ApiInformation.PROJECT_ENDPOINT}${projectId}/1`,
        projectStepOne)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        );
    });
  }
}
