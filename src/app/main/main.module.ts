import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { SalesTimeComponent } from './../components/charts/partners-business/sales-time/sales-time.component';
import { HeaderWithSelectComponent } from './../components/charts/generic/header-with-select/header-with-select.component';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxChartModule, DxDropDownButtonModule, DxSelectBoxModule } from 'devextreme-angular';
import { LineGenericComponent } from '../components/charts/generic/line-generic/line-generic.component';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './components/business/business.component';
import { WorkersComponent } from './components/workers/workers.component';
import { AdminComponent } from './components/admin/admin.component';





@NgModule({
  declarations: [
    LineGenericComponent,
    HeaderWithSelectComponent,
    SalesTimeComponent,
    MainComponent,
    BusinessComponent,
    WorkersComponent,
    AdminComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DxSelectBoxModule,
    DxDropDownButtonModule,
    DxChartModule,

  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
