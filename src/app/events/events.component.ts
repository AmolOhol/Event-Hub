import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit 
{
  takeAdmissionData :any = {}
  events = []
  constructor(private _eventService: EventService,
              private _router: Router) { }

  ngOnInit() 
  {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }

  takeAdmission()
  {
    this._eventService.postTakeAdmission()
    .subscribe(
      res => {
        //localStorage.setItem('token', res.token)
        this._router.navigate(['/takeAdmission'])
      },
      err => console.log(err)
    ) 
  }
}
