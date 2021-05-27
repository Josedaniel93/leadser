import { MainComponent } from './main.component';
import { SalesTimeComponent } from './../components/charts/partners-workers/sales-time/sales-time.component';
import { HeaderWithSelectComponent } from './../components/charts/generic/header-with-select/header-with-select.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { DxChartModule, DxDropDownButtonModule, DxSelectBoxModule } from 'devextreme-angular';
import { LineGenericComponent } from '../components/charts/generic/line-generic/line-generic.component';



@NgModule({
  declarations: [
    LineGenericComponent,
    HeaderWithSelectComponent,
    SalesTimeComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,

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
