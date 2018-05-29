import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule, } from '@angular/flex-layout';

import { ProgressComponent } from './components/progress/progress.component';
import { LoaderService } from './services/loader.service';

@NgModule({
	declarations: [
		ProgressComponent
	],
	exports: [
		ProgressComponent,
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatProgressSpinnerModule
	],
	providers: [
		LoaderService
	]
})
export class LoaderModule { }
