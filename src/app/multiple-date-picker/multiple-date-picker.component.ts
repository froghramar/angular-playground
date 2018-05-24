import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-multiple-date-picker',
	templateUrl: './multiple-date-picker.component.html',
	styleUrls: ['./multiple-date-picker.component.css']
})
export class MultipleDatePickerComponent implements OnInit {

	selectedDates: Date[];

	constructor() {
		this.selectedDates = [
			new Date()
		];
	}

	ngOnInit() {
	}

	removeDate(date: Date) {
		const index = this.selectedDates.indexOf(date);
		if (index !== -1) {
			this.selectedDates.splice(index, 1);
		}
	}

}
