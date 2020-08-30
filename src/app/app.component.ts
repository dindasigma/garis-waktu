import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AppService } from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  selectedCategory = 'All';

  options = [
    { name: "All", value: "All" },
    { name: "Politic", value: "Politic" },
    { name: "Religion", value: "Religion" },
    { name: "Science", value: "Science" },
    { name: "Technology", value: "Technology" }
  ]

  constructor(public router: Router, private appService: AppService) {

  }

  ngOnInit() {
    this.appService.selectedCategory.subscribe(
      selectedCategory => this.selectedCategory = selectedCategory
    )
  }

  changeCategory(newCategory?: string) {
    this.appService.nextCategory(newCategory)
  }
}
