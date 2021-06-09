
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { WorkersComponent } from './components/workers/workers.component';
import { MainComponent } from './main.component';

const routes: Routes = [


  {
    path: '', component: MainComponent,
    children: [
      { path: 'business', component: BusinessComponent },
      { path: 'workers', component: WorkersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
