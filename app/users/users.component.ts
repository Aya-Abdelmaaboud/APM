import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  moduleId: module.id,
  selector: "pm-users",
  templateUrl: "users.component.html",
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users: any[];
  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data=> this.users = data);
  }
  
}
