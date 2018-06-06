import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-rating-slider',
	templateUrl: './rating-slider.component.html',
	styleUrls: ['./rating-slider.component.css']
})
export class RatingSliderComponent implements OnInit {

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
