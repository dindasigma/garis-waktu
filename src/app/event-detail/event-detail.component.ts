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

  constructor(private appService: AppService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  get event(): Event {
    return this.appService.getEvent(this.route.snapshot.params['url'])
  }

}
