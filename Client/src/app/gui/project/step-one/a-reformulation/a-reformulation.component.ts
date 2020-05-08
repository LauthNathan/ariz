import { Component, OnInit } from '@angular/core';
import {AReformulationLanguage, IAReformulationLanguage} from './a-reformulation.language';

@Component({
  selector: 'app-a-reformulation',
  templateUrl: './a-reformulation.component.html',
  styleUrls: ['./a-reformulation.component.scss']
})
export class AReformulationComponent implements OnInit {

  aReformationText: IAReformulationLanguage;

  constructor(private readonly aReformulationLanguage: AReformulationLanguage) { }

  ngOnInit() {
    this.aReformationText = this.aReformulationLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
