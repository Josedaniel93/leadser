import { DonutGenericComponent } from './../components/charts/generic/donut-generic/donut-generic.component';
import { TopWorkersComponent } from './../components/charts/partners-business/top-workers/top-workers.component';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { SalesTimeComponent } from './../components/charts/partners-business/sales-time/sales-time.component';
import { HeaderWithSelectComponent } from './../components/charts/generic/header-with-select/header-with-select.component';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxChartModule, DxDropDownButtonModule, DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { LineGenericComponent } from '../components/charts/generic/line-generic/line-generic.component';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './components/business/business.component';
import { WorkersComponent } from './components/workers/workers.component';
import { AdminComponent } from './components/admin/admin.component';
import { CallsComponent } from './components/calls/calls.component';
import { FormationComponent } from './components/formation/formation.component';
import { YouTubePlayerModule } from '@angular/youtube-player';





@NgModule({
  //All component used on MainModule
  declarations: [
    LineGenericComponent,
    DonutGenericComponent,
    HeaderWithSelectComponent,
    TopWorkersComponent,
    SalesTimeComponent,
    MainComponent,
    BusinessComponent,
    WorkersComponent,
    AdminComponent,
    CallsComponent,
    FormationComponent,
  ],
  //when we import Main module we import all this modules to app
  imports: [
    MainRoutingModule,//Module to generate troutes
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DxSelectBoxModule,//All dx components are dev extreme components
    DxDropDownButtonModule,
    DxChartModule,
    DxPieChartModule,
    YouTubePlayerModule,//Module to allow lists of videos from youtube
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
