import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UrdfViewerComponent } from './urdf-viewer/urdf-viewer.component';
import { RosoutLogComponent } from './rosout-log/rosout-log.component';


@NgModule({
  declarations: [
    AppComponent,
    UrdfViewerComponent,
    RosoutLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
