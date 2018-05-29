import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader/services/loader.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	loaderId1 = '1st-loader';
	loaderId2 = '2nd-loader';

	constructor(private loaderService: LoaderService) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.loaderService.setActiveValue(this.loaderId1, false);
		}, 2000);

		setTimeout(() => {
			this.loaderService.setActiveValue(this.loaderId2, false);
		}, 5000);
	}
}
