import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component'
import { AboutComponent } from './about/about.component'
import { EventDetailComponent } from './event-detail/event-detail.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
    data: { animationState: 'One' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animationState: 'Two' }
  },
  {
    path: 'detail/:url',
    component: EventDetailComponent,
    data: { animationState: 'Two' }
  },
  {
    path: '**',
    component: NotFoundComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
