import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Train } from './train';
import { TRAINS } from './default-trains';
import { MessageService } from './message.service';


@Injectable()
export class TrainService {

  constructor(private messageService: MessageService) { }
  
  getTrains(): Observable<Train[]> {
		//TODO: send message AFTER fetchig the trains
		this.messageService.add('TrainService: fetched trains');
		return of(TRAINS);
	}
	
	getTrain(id: number): Observable<Train> {
		// TODO: send the message _after_ fetching the train
		this.messageService.add(`TrainService: fetched train id=${id}`);
		return of(TRAINS.find(train => train.id === id));
}
}

