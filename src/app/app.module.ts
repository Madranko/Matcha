import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module/material.module';
import { CongratsComponent } from './user/congrats/congrats.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';

import { CookieService } from 'ngx-cookie-service';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
// import { GenderAndPreferencesComponent } from './profile/user-info/gender-and-preferences/gender-and-preferences.component';
import { BirthdateComponent } from './profile/user-info/birthdate/birthdate.component';
// import { CityComponent } from './profile/user-info/city/city.component';
import { InterestsComponent } from './profile/user-info/interests/interests.component';
import { GenderComponent } from './profile/user-info/gender/gender.component';
import { PreferencesComponent } from './profile/user-info/preferences/preferences.component';
import { BiographyComponent } from './profile/user-info/biography/biography.component';
import { ProfilePhotoComponent } from './profile/user-info/profile-photo/profile-photo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './main-page/search/search.component';
import { ChatComponent } from './main-page/chat/chat.component';
import { FavoritesComponent } from './main-page/favorites/favorites.component';
import { SettingsComponent } from './main-page/settings/settings.component';
// import { DefaultInterestsComponent } from './profile/user-info/interests/default-interests/default-interests.component';
// import { InterestsComponent } from './profile/user-info/interests/interests.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		routingComponents,
		CongratsComponent,
		ForgotPassComponent,
		ProfileComponent,
		UserInfoComponent,
		// GenderAndPreferencesComponent,
		BirthdateComponent,
		// CityComponent,
		InterestsComponent,
		GenderComponent,
		PreferencesComponent,
		BiographyComponent,
		ProfilePhotoComponent,
		MainPageComponent,
		SearchComponent,
		ChatComponent,
		FavoritesComponent,
		SettingsComponent,
		// DefaultInterestsComponent
		// ReactiveFormsModule
		// InterestsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		CookieService
		// FormControl
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
