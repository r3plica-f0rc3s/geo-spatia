import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  calendarOpened = false;
  selectedDate: Date;
  currentDate = new Date(Date.now());
  currentTime = this.currentDate;
  @Output()
  dateSelected = new EventEmitter<Date>();
  @ViewChild('picker') picker: any;
  constructor() { }

  ngOnInit(): void {
  }

  onDateSelected(event): void {
    this.selectedDate = event;
    this.calendarOpened = false;
    this.dateSelected.next(this.selectedDate);
  }

  timeChanged(event: Date): void {
    const hours = event.getHours();
    const minutes = event.getMinutes();
    this.currentDate.setHours(hours);
    this.currentDate.setMinutes(minutes);
  }

}
