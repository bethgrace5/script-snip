import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptsScreenComponent } from './scripts-screen/scripts-screen.component';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardScreenComponent },
    { path: 'scripts', component: ScriptsScreenComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
