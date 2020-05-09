import { Component, OnInit } from '@angular/core';
import {IPresentationLanguage, PresentationLanguage} from './presentation.language';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  presentationText: IPresentationLanguage;

  constructor(private readonly presentationLanguage: PresentationLanguage) { }

  ngOnInit() {
    this.presentationText = this.presentationLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
