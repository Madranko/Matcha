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
// import { ProfileComponent } from './profile/profile.component';
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
import { FirstLastNameComponent } from './profile/user-info/first-last-name/first-last-name.component';
import { LoginEmailPasswordComponent } from './profile/user-info/login-email-password/login-email-password.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { AvatarPhotoComponent } from './main-page/profile/avatar-photo/avatar-photo.component';
import { ShortInfoComponent } from './main-page/profile/short-info/short-info.component';
import { UserInterestsComponent } from './main-page/profile/user-interests/user-interests.component';
import { MoreInfoComponent } from './main-page/profile/more-info/more-info.component';
import { ProfileBiographyComponent } from './main-page/profile/profile-biography/profile-biography.component';
import { UserGalleryComponent } from './main-page/profile/user-gallery/user-gallery.component';
import { RatingSliderComponent } from './main-page/search/rating-slider/rating-slider.component';
import { DistanceSliderComponent } from './main-page/search/distance-slider/distance-slider.component';
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
		// ProfileComponent,
		UserInfoComponent,
		BirthdateComponent,
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
		FirstLastNameComponent,
		LoginEmailPasswordComponent,
		ProfileComponent,
		AvatarPhotoComponent,
		ShortInfoComponent,
		UserInterestsComponent,
		MoreInfoComponent,
		ProfileBiographyComponent,
		UserGalleryComponent,
		RatingSliderComponent,
		DistanceSliderComponent
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
