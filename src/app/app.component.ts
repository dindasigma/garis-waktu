import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { routeTransitionAnimations } from './route-transition-animation';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routeTransitionAnimations]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }

  changeCategory(newCategory?: string) {
    this.appService.nextCategory(newCategory)
    this.appService.updateScrollY(0)
  }
}
