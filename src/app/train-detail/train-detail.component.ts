import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../train';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TrainService }  from '../train.service';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.css']
})
export class TrainDetailComponent implements OnInit {
	@Input() train: Train;

  constructor(
    private route: ActivatedRoute,
	private trainService: TrainService,
	private location: Location
  ) { }

  ngOnInit(): void {
	  this.getTrain();
  }
  getTrain(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.trainService.getTrain(id)
    .subscribe(train => this.train = train);
}
	goBack(): void {
  this.location.back();
}
}
