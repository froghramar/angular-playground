import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderModule, } from './loader/loader.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule,
		LoaderModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
