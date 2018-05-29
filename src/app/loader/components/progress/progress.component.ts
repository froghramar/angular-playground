import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnChanges {

	@Input()
	loaderId: string;
	loading: boolean;

	constructor(private loaderService: LoaderService) {
		this.loading = true;
	}

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.loaderId) {
			this.loaderService.getLoaderEvents(this.loaderId).subscribe(
				(value: boolean) => {
					this.loading = value;
				}
			);
		}
	}

}
