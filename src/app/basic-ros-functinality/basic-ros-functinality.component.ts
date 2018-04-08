import { Component, OnInit } from '@angular/core';

import { Ros, Topic, Message, Service, ServiceRequest, ServiceResponse, Param } from 'roslib';

@Component({
  selector: 'app-basic-ros-functinality',
  templateUrl: './basic-ros-functinality.component.html',
  styleUrls: ['./basic-ros-functinality.component.css']
})
export class BasicRosFunctinalityComponent implements OnInit {
  private ros: Ros;
  connected: boolean = false;
  private listener: Topic;
  subscribeMessage: string;
  private addTwoIntsClient: Service;
  num: number;
  constructor() { }

  ngOnInit() {
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

  private subscribeEvent = (message) => {
    console.log('Received message on ' + this.listener.name + ': ' + message.data);
    this.subscribeMessage = message.data;
    this.listener.unsubscribe();
  }

  private serviceEvent = (result) => {
    console.log('Result for service call on '
      + this.addTwoIntsClient.name
      + ': '
      + result.sum);
    this.num = result.num;
  }

  connect() {
    this.ros = new Ros({
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

  publishTopic() {
    if (this.connected) {
      let cmdVel = new Topic({
        ros: this.ros,
        name: '/cmd_vel',
        messageType: 'geometry_msgs/Twist'
      });

      let twist = new Message({
        linear: {
          x: 0.1,
          y: 0.2,
          z: 0.3
        },
        angular: {
          x: -0.1,
          y: -0.2,
          z: -0.3
        }
      });
      cmdVel.publish(twist);
    }
  }

  subscribeTopic() {
    if(this.connected){
      this.listener = new Topic({
        ros: this.ros,
        name: '/listener',
        messageType: 'std_msgs/String'
      });
  
      this.listener.subscribe(this.subscribeEvent);  
    }
  }

  callService() {
    if(this.connected){
      this.addTwoIntsClient = new Service({
        ros: this.ros,
        name: '/add_two_ints',
        serviceType: 'rospy_tutorials/AddTwoInts'
      });
  
      let request = new ServiceRequest({
        a: 1,
        b: 2
      });
  
      this.addTwoIntsClient.callService(request, this.serviceEvent);  
    }
  }

  getAndSetParam() {
    if(this.connected) {
      this.ros.getParams(function (params) {
        console.log(params);
      });
  
      var maxVelX = new Param({
        ros: this.ros,
        name: 'max_vel_y'
      });
  
      maxVelX.set(0.8);
      maxVelX.get(function (value) {
        console.log('MAX VAL: ' + value);
      });
    }
  }
}
