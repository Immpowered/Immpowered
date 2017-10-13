import { observable, action } from "mobx";

export default class ContentContainerStore {
  @observable content = 'landing';

  @action start() {
    this.content = 'background';
    console.log("STARTED");
  }
}