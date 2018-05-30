import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatIconModule,
		MatInputModule,
		MatRadioModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatGridListModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatToolbarModule,
		MatBadgeModule,
		MatSelectModule,
		MatDividerModule
	],
	exports: [
		MatButtonModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatIconModule,
		MatInputModule,
		MatRadioModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatGridListModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatToolbarModule,
		MatBadgeModule,
		MatSelectModule,
		MatDividerModule
	],
})
export class MaterialModule { }
