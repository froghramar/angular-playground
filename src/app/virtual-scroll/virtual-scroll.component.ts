import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-virtual-scroll',
	templateUrl: './virtual-scroll.component.html',
	styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

	virtualScrollContainerHeight = 1000;

	constructor() { }

	ngOnInit() {
	}

}