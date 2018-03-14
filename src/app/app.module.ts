import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import localeFr from '@angular/common/locales/fr';
import localeBn from '@angular/common/locales/bn';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeBn, 'bn');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'bn'
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
