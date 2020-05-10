import {Component, Input, OnInit} from '@angular/core';
import {IMoreInformationLanguage, MoreInformationLanguage} from './more-information.language';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.scss']
})
export class MoreInformationComponent implements OnInit {

  moreInformationText: IMoreInformationLanguage;
  @Input() showMoreText: string;

  constructor(private readonly moreInformationLanguage: MoreInformationLanguage) { }

  ngOnInit() {
    this.moreInformationText = this.moreInformationLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
