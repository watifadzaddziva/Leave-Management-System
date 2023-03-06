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
  Allevents: any

constructor(private defaultService: DefaultService, private http:HttpClient){}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(){
    this.defaultService.getAllEvents().subscribe(res=>{
      this.calendarOptions.events = res
    })
this.calendarOptions={
  plugins: [dayGridPlugin, ],
  initialView: 'dayGridMonth',
  weekends: false,
}
    

    console.log(this.calendarOptions);
    
  }





}
