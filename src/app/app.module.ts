import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardScreenModule } from './dashboard-screen/dashboard-screen.module';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ScriptsScreenModule } from './scripts-screen/scripts-screen.module';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClipboardModule,
    DashboardScreenModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ScriptsScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
