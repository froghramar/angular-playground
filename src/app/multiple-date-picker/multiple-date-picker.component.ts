import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
	selector: 'app-multiple-date-picker',
	templateUrl: './multiple-date-picker.component.html',
	styleUrls: ['./multiple-date-picker.component.css']
})
export class MultipleDatePickerComponent implements OnInit {

	@Input()
	selectedDates: Date[];

	constructor() {
		this.selectedDates = [ ];
	}

	ngOnInit() {
	}

	removeDate(date: Date) {
		const index = this.selectedDates.indexOf(date);
		if (index !== -1) {
			this.selectedDates.splice(index, 1);
		}
	}

	onDateChange(event: MatDatepickerInputEvent<Date>) {
		this.selectedDates.push(event.value);
	}

}
