import { observable, action } from "mobx";

export default class ContentContainerStore {
  @observable content = 'landing';

  @action start() {
  	console.log("STARTING")
    this.content = 'background';
  }

  @action choose_background() {
  	console.log("I AM GETTIN MY RESULTSSSSS")
  	this.content = 'results';
  }
}