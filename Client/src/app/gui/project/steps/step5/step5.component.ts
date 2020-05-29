import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NumberUtils} from '../../../../utils/number.utils';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {
  comment = '';
  showMoreText = '';
  elements = [];
  links = [];
  ct = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    const majorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[3]);
    const minorStep = NumberUtils.stringToNumbers(this.router.url.split('/')[4]);
    // TODO: récupérer les éléments du localStorage
    this.elements = ["Gaz", "Bille"];
    // TODO: récupérer les liens du localStorage
    this.links = ["Impact", "Accélération"];
    // TODO: récupérer le texte du CT de l'étape précédente du localStorage
    this.ct = "Vitesse rapide";
  }

  /**
   * Converts a number to its corresponding alphabet letter
   * @param nb The number of alphabet (0=>A)
   */
  nbToAlphabet(nb: number) {
    return String.fromCharCode(nb+65);
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
