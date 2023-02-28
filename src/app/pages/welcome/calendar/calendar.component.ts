import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() },
      { title: 'Reading', start: '2023-01-30', end:'2023-02-02' },
      { title: 'Studying', start: '2023-02-22', end:'2023-02-23' },
      { title: 'Studying', start: '2023-03-13T12:00:00', end:'2023-03-16T15:30:00' }
    ]
  };


}
