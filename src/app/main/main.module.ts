import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SalesTimeComponent } from './../components/charts/partners-workers/sales-time/sales-time.component';
import { HeaderWithSelectComponent } from './../components/charts/generic/header-with-select/header-with-select.component';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DxChartModule, DxDropDownButtonModule, DxSelectBoxModule } from 'devextreme-angular';
import { LineGenericComponent } from '../components/charts/generic/line-generic/line-generic.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LineGenericComponent,
    HeaderWithSelectComponent,
    SalesTimeComponent,
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    DxSelectBoxModule,
    DxDropDownButtonModule,
    DxChartModule,

  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
