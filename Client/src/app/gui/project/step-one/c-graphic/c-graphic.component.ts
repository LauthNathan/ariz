import { Component, OnInit } from '@angular/core';
import {CGraphicLanguage, ICGraphicLanguage} from './c-graphic.language';

@Component({
  selector: 'app-c-graphic',
  templateUrl: './c-graphic.component.html',
  styleUrls: ['./c-graphic.component.scss']
})
export class CGraphicComponent implements OnInit {

  cGraphicText: ICGraphicLanguage;

  constructor(private readonly cGraphicLanguage: CGraphicLanguage) { }

  ngOnInit() {
    this.cGraphicText = this.cGraphicLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
