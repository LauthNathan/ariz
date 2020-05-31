import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.component.html',
  styleUrls: ['./project-progress.component.scss']
})
export class ProjectProgressComponent implements OnInit {

  @Input() majorStep: number;
  @Input() minorStep: number;

  constructor() { }

  ngOnInit() {
  }

}
