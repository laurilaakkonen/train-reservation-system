import { Component, OnInit } from '@angular/core';

import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
	
	selectedTrain: Train;
	
	trains: Train[];
	
	constructor(private trainService: TrainService) { }
	
	ngOnInit() {
	  this.getTrains();
	}
  
	onSelect(train : Train): void{
		this.selectedTrain = train;
	}
	
	getTrains(): void {
		this.trainService.getTrains()
			.subscribe(trains => this.trains = trains);
  }
}
