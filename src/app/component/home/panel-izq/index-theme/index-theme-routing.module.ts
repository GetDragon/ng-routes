import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexThemeComponent } from './index-theme.component';

const routes: Routes = [
  { path: "", component: IndexThemeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexThemeRoutingModule { }
