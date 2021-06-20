import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './component/root/root.component';

const routes: Routes = [
  { path: "", redirectTo: "root", pathMatch: "full" },
  { path: "root", component: RootComponent },
  { path: "home", loadChildren: () => import("./component/home/home.module").then(m=>m.HomeModule) },
  { path: "home/:id", loadChildren: () => import("./component/home/home.module").then(m=>m.HomeModule) },
  { path: "contact", loadChildren: () => import("./component/contact/contact.module").then(m=>m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
