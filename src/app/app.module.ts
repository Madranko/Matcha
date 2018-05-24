import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module/material.module';
import { CongratsComponent } from './congrats/congrats.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		routingComponents,
		CongratsComponent,
		ForgotPassComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
