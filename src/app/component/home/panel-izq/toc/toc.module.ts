import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TocRoutingModule } from './toc-routing.module';
import { TocComponent } from './toc.component';


@NgModule({
  declarations: [TocComponent],
  imports: [
    CommonModule,
    TocRoutingModule
  ]
})
export class TocModule { }
