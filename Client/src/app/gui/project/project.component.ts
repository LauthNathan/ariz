import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {IProjectLanguage, ProjectLanguage, StepNode} from './project.language';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  opened = true;
  projectText: IProjectLanguage;

  treeControl = new NestedTreeControl<StepNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<StepNode>();
  hasChild = (_: number, node: StepNode) => !!node.children && node.children.length > 0;

  constructor(private readonly projectLanguage: ProjectLanguage) {
  }

  ngOnInit() {
    this.projectText = this.projectLanguage[localStorage.getItem('arizToolLanguageCode')];
    this.dataSource.data = this.projectText.steps;
  }

}
