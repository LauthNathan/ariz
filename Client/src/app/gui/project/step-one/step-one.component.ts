import { Component, OnInit } from '@angular/core';
import {IStepOneLanguage, StepOneLanguage} from './step-one.language';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  stepOneText: IStepOneLanguage;

  constructor(private readonly stepOneLanguage: StepOneLanguage) { }

  ngOnInit() {
    this.stepOneText = this.stepOneLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
