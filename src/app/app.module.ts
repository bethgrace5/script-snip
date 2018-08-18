import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ScriptsScreenModule } from './scripts-screen/scripts-screen.module';
import { DashboardScreenModule } from './dashboard-screen/dashboard-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScriptsScreenModule,
    DashboardScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
