import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as ROSLIB from 'roslib';

declare var ROS3D: any;


@Component({
  selector: 'app-visualizing-a-urdf',
  templateUrl: './visualizing-a-urdf.component.html',
  styleUrls: ['./visualizing-a-urdf.component.css']
})
export class VisualizingAUrdfComponent implements OnInit, AfterViewInit {
  private ros: ROSLIB.Ros;
  connected: boolean = false;
  // private viewer: ROS3D.Viewer;
  private viewer: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  createViewer() {
    this.viewer = new ROS3D.Viewer({
      divID: 'urdf',
      width : 800,
      height : 600,
      antialias: true
    });
    this.viewer.addObject(new ROS3D.Grid());
  }

  private connectionEvent = () => {
    console.log('Connected to websocket server.');
    this.connected = true;
  }

  private errorEvent = (error) => {
    console.log('Error connecting to websocket server: ', error);
    this.connected = false;
  }

  private closeEvent = () => {
    console.log('Connection to websocket server closed.');
    this.connected = false;
  }

  connect() {
    this.ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090'
    });

    this.ros.on('connection', this.connectionEvent);
    this.ros.on('error', this.errorEvent);
    this.ros.on('close', this.closeEvent);
  }

  disconnect() {
    if (this.connected) {
      this.ros.close();
    }
  }
}
