import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CongratsComponent } from './congrats/congrats.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: 'signup', component: SignupComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'congrats', component: CongratsComponent }
			{ path: 'forgot-pass', component: ForgotPassComponent }
		],
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
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
