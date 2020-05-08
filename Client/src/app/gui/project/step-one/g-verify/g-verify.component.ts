import { Component, OnInit } from '@angular/core';
import {GVerifyLanguage, IGVerifyLanguage} from './g-verify.language';

@Component({
  selector: 'app-g-verify',
  templateUrl: './g-verify.component.html',
  styleUrls: ['./g-verify.component.scss']
})
export class GVerifyComponent implements OnInit {

  gVerifyText: IGVerifyLanguage;

  constructor(private readonly gVerifyLanguage: GVerifyLanguage) { }

  ngOnInit() {
    this.gVerifyText = this.gVerifyLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
