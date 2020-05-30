import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ProjectService} from '../services/project/project.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProjectResolver implements Resolve<any> {

  id = 'id';

  constructor(private readonly projectService: ProjectService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return Promise.all([
      // this.projectService.getOneProjectAuthenticatedUser(route.params[this.id])
    ]).then(values => {
      return {
        // projectData: values[0]
        projectData: {}
      };
    });
  }

}
