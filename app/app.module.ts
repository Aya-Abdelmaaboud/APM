import { NgModule } from "@angular/core";

// Modules
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { ProductComponent } from "./products/products.component";
import { SelectedProductComponent } from "./products/selected-product.component";
import { UsersComponent } from "./users/users.component";
import { PageNotFoundComponent } from "./not-found/page-not-found.component";
import { WelcomeComponent } from "./home/welcome.component";
import { SelectedUserComponent } from "./users/selected-user.component";

// Directives And Pipes
import { AutoGrowDirective } from "./shared/directives/auto-grow.directive";
import { FilterPipe } from "./shared/pipes/filter.pipe";

// Services
import { ProductsService } from "./services/products.service";
import { UsersService } from "./services/users.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ProductComponent,
    AutoGrowDirective,
    FilterPipe,
    SelectedProductComponent,
    UsersComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    SelectedUserComponent,
  ],
  providers: [ProductsService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
