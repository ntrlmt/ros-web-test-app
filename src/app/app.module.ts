import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasicRosFunctinalityComponent } from './basic-ros-functinality/basic-ros-functinality.component';
import { VisualizingAUrdfComponent } from './visualizing-a-urdf/visualizing-a-urdf.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicRosFunctinalityComponent,
    VisualizingAUrdfComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
