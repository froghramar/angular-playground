import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import localeBn from '@angular/common/locales/bn';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

registerLocaleData(localeBn, 'bn');

export function httpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [ HttpClient ]
			}
		})
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
