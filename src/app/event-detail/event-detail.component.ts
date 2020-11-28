import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service'
import { Event } from '../app.model';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  selectedCategory = 'Politic';

  constructor(private appService: AppService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.appService.selectedCategory.subscribe(
      selectedCategory => this.selectedCategory = selectedCategory
    )
    console.log(this.selectedCategory)
  }

  get event(): Event {
    return this.appService.getEvent(this.route.snapshot.params['url'])
  }

  get next(): Event {
    var current: number = +this.appService.getEvent(this.route.snapshot.params['url']).id;
    return this.appService.getEventById(current + 1)
  }

  get prev(): Event {
    var current: number = +this.appService.getEvent(this.route.snapshot.params['url']).id;
    return this.appService.getEventById(current - 1)
  }



}
