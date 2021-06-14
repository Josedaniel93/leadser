

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FormationComponent } from './components/formation/formation.component';
import { BusinessComponent } from './components/business/business.component';
import { CallsComponent } from './components/calls/calls.component';
import { WorkersComponent } from './components/workers/workers.component';
import { MainComponent } from './main.component';

const routes: Routes = [


  {//we delcare all routes we use on this module
    path: 'main', component: MainComponent,
    children: [//if want /main/whatever we declare as children
      { path: 'business', component: BusinessComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'admin', component: AdminComponent, },
      { path: 'calls', component: CallsComponent, },
      { path: 'formation', component: FormationComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
