import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatChipsModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MultipleDatePickerComponent } from './multiple-date-picker/multiple-date-picker.component';

@NgModule({
	declarations: [
		AppComponent,
		MultipleDatePickerComponent
	],
	imports: [
		BrowserAnimationsModule,
		MatButtonModule,
		MatChipsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
