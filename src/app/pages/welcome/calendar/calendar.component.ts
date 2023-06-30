import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DefaultService } from '../services/default.service';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions!:CalendarOptions

constructor(private defaultService: DefaultService, private http:HttpClient){}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.defaultService.getAllEvents().subscribe(res => {
      this.calendarOptions.events = res.map((event: any) => ({
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
        color: this.getEventColor(event.leaveType)
      }));

    });

this.calendarOptions={
  plugins: [dayGridPlugin, ],
  initialView: 'dayGridMonth',
  weekends: false,
  eventDisplay: 'block',
  }
}


toggleWeekends() {
  this.calendarOptions.weekends = !this.calendarOptions.weekends 
}

getEventColor(leaveType:string):string{
  switch (leaveType) {
    case 'Annual':
      return '#141c4c'; 
    case 'Unpaid':
      return '#9c1c1c'; 
    case 'Sick':
      return '#F79327'; 
    default:
      return '#000000'; 
  }
}


}
