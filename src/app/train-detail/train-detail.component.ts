import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../train';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.css']
})
export class TrainDetailComponent implements OnInit {
	@Input() train: Train;

  constructor() { }

  ngOnInit() {
  }

}
