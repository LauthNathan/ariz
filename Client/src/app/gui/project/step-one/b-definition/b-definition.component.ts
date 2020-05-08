import { Component, OnInit } from '@angular/core';
import {BDefinitionLanguage, IBDefinitionLanguage} from './b-definition.language';

@Component({
  selector: 'app-b-definition',
  templateUrl: './b-definition.component.html',
  styleUrls: ['./b-definition.component.scss']
})
export class BDefinitionComponent implements OnInit {

  bDefinitionText: IBDefinitionLanguage;

  constructor(private readonly bDefinitionLanguage: BDefinitionLanguage) { }

  ngOnInit() {
    this.bDefinitionText= this.bDefinitionLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
