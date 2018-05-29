import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

	loading: boolean;

	constructor() {
		this.loading = true;
	}

	ngOnInit() {
		setTimeout(() => {
			this.loading = false;
		}, 2000);
	}

}
