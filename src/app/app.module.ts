import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule, MatDatepickerModule, MatIconModule, MatNativeDateModule } from '@angular/material';

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
		MatDatepickerModule,
		MatNativeDateModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
