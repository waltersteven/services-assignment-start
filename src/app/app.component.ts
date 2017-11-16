import { Component } from '@angular/core';
import { UsersService } from './usersservice.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService] //at setting the provider here we expose a service instance to the rest of components.
})
export class AppComponent{
  activeUsers = [];
  inactiveUsers = [];
}
