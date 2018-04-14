import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	trains: Train[] = [];
 
	constructor(private trainService: TrainService) { }
 
	ngOnInit() {
		this.getTrains();
	}
 
	getTrains(): void {
		this.trainService.getTrains()
			.subscribe(trains => this.trains = trains.slice(1, 5));
	}

}
