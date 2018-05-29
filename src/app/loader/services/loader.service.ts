import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {

	private loaders: {[key: string]: BehaviorSubject<boolean>};

	constructor() { }

	getCurrentValue(id: string) {
		return this.loaders[id] ? this.loaders[id].getValue() : false;
	}

	getLoaderEvents(id: string) {
		if (!this.loaders[id]) {
			this.loaders[id] = new BehaviorSubject<boolean>(false);
		}
		return this.loaders[id].asObservable();
	}

	register(id: string, value = true) {
		if (!this.loaders[id]) {
			this.loaders[id] = new BehaviorSubject<boolean>(value);
		}
	}

	setActiveValue(id: string, value: boolean) {
		if (!this.loaders[id]) {
			this.loaders[id] = new BehaviorSubject<boolean>(value);
		} else {
			this.loaders[id].next(value);
		}
	}

	unregister(id: string) {
		if (this.loaders[id]) {
			delete this.loaders[id];
		}
	}

}
