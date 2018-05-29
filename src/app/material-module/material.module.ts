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
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';


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
		MatSelectModule,
		MatToolbarModule,
		MatBadgeModule
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
		MatSelectModule,
		MatToolbarModule,
		MatBadgeModule
	],
})
export class MaterialModule { }
