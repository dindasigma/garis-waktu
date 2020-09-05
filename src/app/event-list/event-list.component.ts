import { Component, OnInit, HostListener } from '@angular/core';
import { Event } from '../app.model';
import { ViewportScroller } from '@angular/common';

import { AppService } from '../app.service'


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})


export class EventListComponent implements OnInit {
  selectedCategory = 'All';
  scrollY = 0;

  @HostListener('window:scroll') onScroll(): void {
    this.appService.updateScrollY(this.scroller.getScrollPosition()[1]);
  }

  constructor(private appService: AppService, private scroller: ViewportScroller) {
  }

  ngOnInit() {
    this.appService.selectedCategory.subscribe(
      selectedCategory => this.selectedCategory = selectedCategory
    )
    this.appService.currentScrollY.subscribe(
      currentScrollY => this.scrollY = currentScrollY
    )
  }

  ngAfterViewChecked() {
    this.scroller.scrollToPosition([0, this.scrollY])
  }

  get events(): Event[] {
    return this.appService.getEvents(this.selectedCategory)
  }





}
