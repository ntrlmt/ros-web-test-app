import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasicRosFunctinalityComponent } from './basic-ros-functinality/basic-ros-functinality.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicRosFunctinalityComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
