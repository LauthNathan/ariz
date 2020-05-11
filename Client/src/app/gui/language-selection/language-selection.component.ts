import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.scss']
})
export class LanguageSelectionComponent implements OnInit {
  languages = [
    'gb',
    'fr'
  ];
  selected = localStorage.getItem('arizToolLanguageCode');
  constructor() { }

  ngOnInit(): void {
    if (!this.selected) {
      this.selected = 'gb';
    }
    this.loadNewLanguage(this.selected, true);
  }

  /**
   * Load the data for the given language.
   * Also add the new language code to the local storage.
   * Finally reload the page.
   *
   * @param newLanguage - The new language to load the data of.
   * @param noReload - Optional, if present don't reload the page.
   */
  loadNewLanguage(newLanguage: string, noReload?: boolean): void {
    localStorage.setItem('arizToolLanguageCode', newLanguage);
    if (!noReload) {
      location.reload();
    }
  }

}
