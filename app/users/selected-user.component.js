"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var users_service_1 = require("../services/users.service");
var router_1 = require("@angular/router");
var SelectedUserComponent = (function () {
    function SelectedUserComponent(usersService, actRout) {
        this.usersService = usersService;
        this.actRout = actRout;
    }
    SelectedUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.actRout.snapshot.params["userId"]);
        console.log(id);
        this.usersService.getUserById(id).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    SelectedUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "pm-selected-user",
            templateUrl: "./selected-user.component.html",
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService, router_1.ActivatedRoute])
    ], SelectedUserComponent);
    return SelectedUserComponent;
}());
exports.SelectedUserComponent = SelectedUserComponent;
//# sourceMappingURL=selected-user.component.js.map