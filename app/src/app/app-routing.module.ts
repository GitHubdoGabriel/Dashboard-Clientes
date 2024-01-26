import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";
import { ClientRoutes } from "./pages/client/client.module";
import { ClientDetailsComponent } from "./pages/client/client-details/client-details.component";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
      ...ClientRoutes,
      ...EnterpriseRoutes,
      { path: "client-details", component: ClientDetailsComponent }
    ],
  },
  {
    path: "**",
    redirectTo: ""
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
