import { Component, OnInit } from '@angular/core';
import {DashboardLanguage, IDashboardLanguage} from './dashboard.language';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardText: IDashboardLanguage;

  constructor(private readonly dashboardLanguage: DashboardLanguage) { }

  ngOnInit() {
    this.dashboardText = this.dashboardLanguage[localStorage.getItem('arizToolLanguageCode')];
  }

}
