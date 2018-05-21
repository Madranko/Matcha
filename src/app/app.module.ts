import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module/material.module';
import { LoginComponent } from './login/login.component';
@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		SignupComponent,
		HomeComponent,
		LoginComponent
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
