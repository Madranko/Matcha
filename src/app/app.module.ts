import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module/material.module';
import { CongratsComponent } from './user/congrats/congrats.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';

import { CookieService } from 'ngx-cookie-service';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { BirthdateComponent } from './profile/user-info/birthdate/birthdate.component';
import { InterestsComponent } from './profile/user-info/interests/interests.component';
import { GenderComponent } from './profile/user-info/gender/gender.component';
import { PreferencesComponent } from './profile/user-info/preferences/preferences.component';
import { BiographyComponent } from './profile/user-info/biography/biography.component';
import { ProfilePhotoComponent } from './profile/user-info/profile-photo/profile-photo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './main-page/search/search.component';
import { ChatComponent } from './main-page/chat/chat.component';
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
import { HistoryComponent } from './main-page/history/history.component';
import { VisitPageComponent } from './main-page/search/visit-page/visit-page.component';
import { ChangeProfilePhotoComponent } from './main-page/settings/change-profile-photo/change-profile-photo.component';
import { ChangeEmailComponent } from './main-page/settings/change-email/change-email.component';
import { ChangeLoginComponent } from './main-page/settings/change-login/change-login.component';
import { ChangePasswordComponent } from './main-page/settings/change-password/change-password.component';
import { ChangeFirstNameComponent } from './main-page/settings/change-first-name/change-first-name.component';
import { ChangeLastNameComponent } from './main-page/settings/change-last-name/change-last-name.component';
import { ChangeGenderComponent } from './main-page/settings/change-gender/change-gender.component';
import { ChangePreferencesComponent } from './main-page/settings/change-preferences/change-preferences.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		routingComponents,
		CongratsComponent,
		ForgotPassComponent,
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
		HistoryComponent,
		VisitPageComponent,
		ChangeProfilePhotoComponent,
		ChangeEmailComponent,
		ChangeLoginComponent,
		ChangePasswordComponent,
		ChangeFirstNameComponent,
		ChangeLastNameComponent,
		ChangeGenderComponent,
		ChangePreferencesComponent
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
