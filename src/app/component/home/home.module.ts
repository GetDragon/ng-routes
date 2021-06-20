import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';
import { PanelIzqComponent } from './panel-izq/panel-izq.component';
import { PanelDerComponent } from './panel-der/panel-der.component';
import { ToolbarDerComponent } from './toolbar-der/toolbar-der.component';


@NgModule({
  declarations: [
    HomeComponent, 
    PanelIzqComponent, 
    PanelDerComponent, 
    ToolbarDerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
