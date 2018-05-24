import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MultipleDatePickerComponent } from './multiple-date-picker/multiple-date-picker.component';

@NgModule({
	declarations: [
		AppComponent,
		MultipleDatePickerComponent
	],
	imports: [
		BrowserModule,
		MatButtonModule,
		MatChipsModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
