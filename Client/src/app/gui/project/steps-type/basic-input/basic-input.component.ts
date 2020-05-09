import { Component, OnInit } from '@angular/core';
import {BasicInputLanguage, IBasicInputLanguage} from './basic-input.language';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit {

  basicInputText: IBasicInputLanguage;

  constructor(private readonly basicInputLanguage: BasicInputLanguage) { }

  ngOnInit() {
    this.basicInputText = this.basicInputLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
