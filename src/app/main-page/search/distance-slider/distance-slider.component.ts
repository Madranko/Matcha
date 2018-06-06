import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-distance-slider',
	templateUrl: './distance-slider.component.html',
	styleUrls: ['./distance-slider.component.css']
})
export class DistanceSliderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	formatLabel(value: number | null) {
		if (!value) {
			return 0;
		}
		return value;
	}
}
