import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from 'fullcalendar';
import { EventImpl } from '@fullcalendar/core/internal';
import {FullCalendarComponent as Fcc} from '@fullcalendar/angular'

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent implements OnInit {
  @ViewChild('fullcal') fullCal !: Fcc;
  public calendarOptions: any;
  private events: any[] = [
    {
      id: 1,
      title: 'Event 1',
      start: '2023-03-01',
      end: '2023-03-01',
      statusId: 1,
    },
    {
      id: 2,
      title: 'Event 2',
      start: '2023-03-03',
      end: '2023-03-03',
      statusId: 2,
    },
    {
      id: 3,
      title: 'Event 3',
      start: '2023-03-07',
      end: '2023-03-07',
      statusId: 3,
    },
    {
      id: 4,
      title: 'Event 4',
      start: '2023-03-09',
      statusId: 4,
    },
    {
      id: 5,
      title: 'Event 5',
      start: '2023-03-14',
      end: '2023-03-16',
      statusId: 1,
    },
    {
      id: 6,
      title: 'Event 6',
      start: '2023-03-09',
      statusId: 1,
    },
    {
      id: 7,
      title: 'Event 7',
      start: '2023-03-12',
      statusId: 1,
    },
  ];
  private options: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialDate: new Date().setDate(1),
    headerToolbar: {
      left: 'prev,next today',
      center: '',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventOverlap: false,
    weekends: true,
    allDayText: 'This is just a text',
    allDaySlot: true,

    // All events here
    dateClick: (event: any) => this.onDateClick(event),
    eventClick: (event: any) => this.onEventClick(event),
    // eventMouseEnter: (event: any) => this.onEventMouseEnter(event),
    // eventMouseLeave: (event: any) => this.onEventMouseLeave(event),
  };
  constructor() {}
  ngOnInit(): void {
    this.events.map((x: any) => (x.color = this.setEventColor(x.statusId)));
    this.calendarOptions = {
      ...this.options,
      ...{
        events: this.events,
      },
    };
  }

  private onEventClick(event: any) {
    const eventData: EventImpl = event.event;
    const setEvent = this.events.find((x: any)=> x.id === parseInt(eventData.id));
    setEvent.id = setEvent.id + 10;
    this.events.push(setEvent);
    this.calendarOptions.events = [... this.events]
  }

  private onDateClick(event: any) {
    console.log(event);
  }

  private onEventMouseEnter(event: any) {
    console.log(event);
  }

  private onEventMouseLeave(event: any) {
    console.log(event);
  }

  private setEventUrl() {
    return 'http://www.google.com';
  }

  private setEventColor(eventStatusId: number) {
    switch (eventStatusId) {
      case 1:
        return 'green';
      case 2:
        return 'red';
      case 3:
        return 'blue';
      case 4:
        return 'grey';
      default:
        return 'lightgrey';
    }
  }
}
