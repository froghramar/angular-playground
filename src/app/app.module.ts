import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { VirtualScrollModule } from './virtual-scroll/virtual-scroll.module';

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent
	],
	imports: [
		NoopAnimationsModule,
		BrowserModule,
		VirtualScrollModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
