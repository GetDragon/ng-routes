import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawArtComponent } from './law-art.component';

const routes: Routes = [
  { path:"", component: LawArtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawArtRoutingModule { }
