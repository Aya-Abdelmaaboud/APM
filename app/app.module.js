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
// Modules
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Components
var app_component_1 = require("./app.component");
var products_component_1 = require("./products/products.component");
var selected_product_component_1 = require("./products/selected-product.component");
var users_component_1 = require("./users/users.component");
var page_not_found_component_1 = require("./not-found/page-not-found.component");
var welcome_component_1 = require("./home/welcome.component");
var selected_user_component_1 = require("./users/selected-user.component");
// Directives And Pipes
var auto_grow_directive_1 = require("./shared/directives/auto-grow.directive");
var filter_pipe_1 = require("./shared/pipes/filter.pipe");
// Services
var products_service_1 = require("./services/products.service");
var users_service_1 = require("./services/users.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule],
            declarations: [
                app_component_1.AppComponent,
                products_component_1.ProductComponent,
                auto_grow_directive_1.AutoGrowDirective,
                filter_pipe_1.FilterPipe,
                selected_product_component_1.SelectedProductComponent,
                users_component_1.UsersComponent,
                page_not_found_component_1.PageNotFoundComponent,
                welcome_component_1.WelcomeComponent,
                selected_user_component_1.SelectedUserComponent,
            ],
            providers: [products_service_1.ProductsService, users_service_1.UsersService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map