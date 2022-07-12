import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductComponent } from "./products/products.component";
import { UsersComponent } from "./users/users.component";
import { PageNotFoundComponent } from "./not-found/page-not-found.component";
import {SelectedUserComponent} from "./users/selected-user.component"

const routes: Routes = [
  { path: "", pathMatch: "full", component: WelcomeComponent },
  { path: "products", component: ProductComponent },
  { path: "users", component: UsersComponent },
  {path:"user/:userId",component:SelectedUserComponent},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
