import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
	  private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
	  this.authorizationService.refreshTokens();
  }

}
