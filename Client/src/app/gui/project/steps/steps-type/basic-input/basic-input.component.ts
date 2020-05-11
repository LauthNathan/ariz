import {Component, OnInit} from '@angular/core';
import {IStepsLanguage, StepsLanguage} from '../../steps.language';
import {ActivatedRoute, Router} from '@angular/router';
import {NumberUtils} from '../../../../../utils/number.utils';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit {

  basicInputText: IStepsLanguage;
  comment = '';
  showMoreText = '';
  projectData;
  inputValue;

  constructor(private readonly stepsLanguage: StepsLanguage,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectData = this.route.parent.snapshot.data.projectData;
    const majorStepLetter = this.router.url.split('/')[3];
    const minorStepLetter = this.router.url.split('/')[4];
    const majorStep = NumberUtils.stringToNumbers(majorStepLetter);
    const minorStep = NumberUtils.stringToNumbers(minorStepLetter);
    const majorStepUppercase = 'step' + majorStepLetter[0].toUpperCase() + majorStepLetter.slice(1);
    const minorStepUppercase = 'step' + minorStepLetter[0].toUpperCase() + minorStepLetter.slice(1);
    if (this.projectData.projectData.project[majorStepUppercase]) {
      this.inputValue = this.projectData.projectData.project[majorStepUppercase][minorStepUppercase];
    } else {
      this.inputValue = '';
    }
    this.basicInputText = this.stepsLanguage[localStorage.getItem('arizToolLanguageCode')][majorStep - 1][minorStep - 1];
  }

  /**
   * Get the value of the comment send by the comment component and set it to the variable here.
   *
   * @param comment - The comment from commentComponent.
   */
  setComment(comment: string) {
    this.comment = comment;
  }
}
