import { Component, OnInit } from '@angular/core';
import {DChooseSchemaLanguage, IDChooseSchemaLanguage} from './d-choose-schema.language';

@Component({
  selector: 'app-d-choose-schema',
  templateUrl: './d-choose-schema.component.html',
  styleUrls: ['./d-choose-schema.component.scss']
})
export class DChooseSchemaComponent implements OnInit {

  dChooseSchemaText: IDChooseSchemaLanguage;

  constructor(private readonly dChooseSchemaLanguage: DChooseSchemaLanguage) { }

  ngOnInit() {
    this.dChooseSchemaText = this.dChooseSchemaLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
