import { OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserInfoService } from '../service/user-info.service';
// import { ControlContainer, NgForm } from '@angular/forms';

@Component({
	selector: 'app-interests',
	templateUrl: './interests.component.html',
	styleUrls: [
		'./interests.component.css',
		'../user-info.component.css'
	],
	// viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class InterestsComponent implements OnInit {
	visible: boolean = true;
	selectable: boolean = true;
	removable: boolean = true;
	addOnBlur: boolean = false;
	error: string;
	counter = 0;
	// tagsToStore: UserTags;
	separatorKeysCodes = [ENTER, COMMA];
	tagCtrl = new FormControl();
	filteredTags: Observable<any[]>;
	tags = [];
	allTags = [];

	@ViewChild('tagInput') tagInput: ElementRef;

	constructor(private userInfoService: UserInfoService) {
		this.filteredTags = this.tagCtrl.valueChanges.pipe(
			startWith(null),
			map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));
	}

	ngOnInit() {
		this.userInfoService.getData("getInterests")
			.toPromise()
			.then(
				(data) => {
					this.error = '';
					this.allTags = data;
					console.log(this.allTags);
				},
				(error) => {
					console.log("ERROR");
					this.error = error.error.exception[0].message;
				}
			);
	}

	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;
		const pattern = new RegExp("^[a-zA-Z0-9]{2,15}$");
		if (pattern.test(value) && this.counter < 10) {
			if ((value || '').trim() && this.checkIfExists(value)) {
				this.tags.push(value.trim());
				this.counter = this.tags.length;
				// this.tagsToStore.tags = this.tags;
			}
		}
		if (input) {
			input.value = '';
		}

		this.tagCtrl.setValue(null);
	}

	checkIfExists(tag) {
		for(var i in this.tags) {
			if (this.tags[i] == tag) {
				return false;
			}
		}
		return true;
	}

	remove(tag: any): void {
		const index = this.tags.indexOf(tag);

		if (index >= 0) {
			this.tags.splice(index, 1);
			this.counter = this.tags.length;
		}
	}

	filter(name: string) {
		return this.allTags.filter(tag =>
			tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		if (this.checkIfExists(event.option.viewValue)) {
			this.tags.push(event.option.viewValue);
			this.tagInput.nativeElement.value = '';
			this.tagCtrl.setValue(null);
		}
	}
}
