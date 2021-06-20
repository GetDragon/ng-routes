import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelTocRoutingModule } from './rel-toc-routing.module';
import { RelTocComponent } from './rel-toc.component';


@NgModule({
  declarations: [RelTocComponent],
  imports: [
    CommonModule,
    RelTocRoutingModule
  ]
})
export class RelTocModule { }
