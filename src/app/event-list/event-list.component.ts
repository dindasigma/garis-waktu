import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../app.model';

import { AppService } from '../app.service'


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit {
  public selectedCategory = '';

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  get events(): Event[] {
    return this.appService.getEvents(this.selectedCategory)
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
