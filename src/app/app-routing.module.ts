import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { CongratsComponent } from './user/congrats/congrats.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatComponent } from './main-page/chat/chat.component';
import { HistoryComponent } from './main-page/history/history.component';
import { SearchComponent } from './main-page/search/search.component';
import { SettingsComponent } from './main-page/settings/settings.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { VisitPageComponent } from './main-page/search/visit-page/visit-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},

	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: 'congrats', component: CongratsComponent },
			{ path: 'forgot-pass', component: ForgotPassComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignupComponent }
		],
	},
	{
		path: 'user-info',
		component: UserInfoComponent
	},
	{
		path: 'main',
		component: MainPageComponent,
		children: [
			{
				path: 'search',
				component: SearchComponent
			},
			{ path: 'search/:id', component: VisitPageComponent },
			{ path: 'chat', component: ChatComponent },
			{ path: 'history', component: HistoryComponent },
			{ path: 'settings', component: SettingsComponent },
			{ path: 'profile', component: ProfileComponent }
		],
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
	SignupComponent, LoginComponent, CongratsComponent, ForgotPassComponent
];
