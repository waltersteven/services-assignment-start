import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../usersservice.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  
  constructor(private usersService: UsersService){} //receiving the instance of usersService

  ngOnInit(){      
    this.users = this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
