import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: DashboardComponent}])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
