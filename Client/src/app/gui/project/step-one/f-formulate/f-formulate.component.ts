import { Component, OnInit } from '@angular/core';
import {FFormulateLanguage, IFFormulateLanguage} from './f-formulate.language';

@Component({
  selector: 'app-f-formulate',
  templateUrl: './f-formulate.component.html',
  styleUrls: ['./f-formulate.component.scss']
})
export class FFormulateComponent implements OnInit {

  fFormulateText: IFFormulateLanguage;

  constructor(private readonly fFormulateLanguage: FFormulateLanguage) { }

  ngOnInit() {
    this.fFormulateText = this.fFormulateLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
