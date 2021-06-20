import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexThemeRoutingModule } from './index-theme-routing.module';
import { IndexThemeComponent } from './index-theme.component';


@NgModule({
  declarations: [IndexThemeComponent],
  imports: [
    CommonModule,
    IndexThemeRoutingModule
  ]
})
export class IndexThemeModule { }
