import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainsComponent }      from './trains/trains.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TrainDetailComponent }  from './train-detail/train-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: TrainDetailComponent },
	{ path: 'trains', component: TrainsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}