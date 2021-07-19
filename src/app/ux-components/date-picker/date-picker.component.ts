import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  calendarOpened = false;
  selectedDate: Date;
  currentDate = new Date(Date.now());
  @Output()
  dateSelected = new EventEmitter<Date>();
  constructor() { }

  ngOnInit(): void {
  }

  onDateSelected(event): void {
    this.selectedDate = event;
    this.calendarOpened = false;
    this.dateSelected.next(this.selectedDate);
  }

}
