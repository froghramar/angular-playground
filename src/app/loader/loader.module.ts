import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderDirective, } from './loader.directive';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
	declarations: [
		LoaderDirective,
		ProgressComponent
	],
	exports: [
		LoaderDirective,
		ProgressComponent,
	],
	imports: [
		CommonModule
	],
})
export class LoaderModule { }
