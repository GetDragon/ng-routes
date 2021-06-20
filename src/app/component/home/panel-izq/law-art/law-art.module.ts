import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawArtRoutingModule } from './law-art-routing.module';
import { LawArtComponent } from './law-art.component';


@NgModule({
  declarations: [LawArtComponent],
  imports: [
    CommonModule,
    LawArtRoutingModule
  ]
})
export class LawArtModule { }
