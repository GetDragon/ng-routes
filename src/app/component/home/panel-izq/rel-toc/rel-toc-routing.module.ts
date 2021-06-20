import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelTocComponent } from './rel-toc.component';

const routes: Routes = [
  { path: "", component: RelTocComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelTocRoutingModule { }
