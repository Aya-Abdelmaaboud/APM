import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "pm-selected-user",
  templateUrl: "./selected-user.component.html",
})
export class SelectedUserComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private actRout: ActivatedRoute
  ) {}

  user: any;

  ngOnInit() {
    let id = parseInt(this.actRout.snapshot.params["userId"]);
    console.log(id);
    this.usersService.getUserById(id).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });

  }
}
