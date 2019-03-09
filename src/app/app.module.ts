import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppShellComponent } from './shells/app-shell/app-shell.component';
import { PageErrorShellComponent } from './shells/page-error-shell/page-error-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    PageErrorShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
