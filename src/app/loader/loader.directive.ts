import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appLoader]'
})
export class LoaderDirective {

	constructor(private elementRef: ElementRef) {
		debugger;
	}

}
