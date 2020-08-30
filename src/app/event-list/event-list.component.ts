import { Component, OnInit } from '@angular/core';
import { Event } from '../app.model';

import { AppService } from '../app.service'


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit {
  selectedCategory = 'All';

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.selectedCategory.subscribe(
      selectedCategory => this.selectedCategory = selectedCategory
    )
  }

  get events(): Event[] {
    return this.appService.getEvents(this.selectedCategory)
  }
}
