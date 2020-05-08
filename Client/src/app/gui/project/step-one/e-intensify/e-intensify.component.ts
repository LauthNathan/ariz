import { Component, OnInit } from '@angular/core';
import {EIntensifyLanguage, IEIntensifyLanguage} from './e-intensify.language';

@Component({
  selector: 'app-e-intensify',
  templateUrl: './e-intensify.component.html',
  styleUrls: ['./e-intensify.component.scss']
})
export class EIntensifyComponent implements OnInit {

  eIntensifyText: IEIntensifyLanguage;

  constructor(private readonly eIntensifyLanguage: EIntensifyLanguage) { }

  ngOnInit() {
    this.eIntensifyText = this.eIntensifyLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
