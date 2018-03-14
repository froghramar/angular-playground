import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	today = new Date();
	lang = 'bn';

	languages = [
		{
			key: 'en',
			value: 'English'
		},
		{
			key: 'bn',
			value: 'বাংলা'
		}
	];

	constructor(private translateService: TranslateService) { }

	ngOnInit(): void {
		this.translateService.use(this.lang);
	}

	onLanguageChange(selectedLanguage) {
		this.lang = selectedLanguage;
		this.translateService.use(this.lang);
	}
}
