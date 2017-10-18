import { observable, action } from "mobx";

class AppStore {
  @observable drawer = {
    'open': false
  }
  @observable content = 'landing';
  @action start = () =>{
    console.log('STARTING')
  }
  @action toggle_drawer = () =>{
    this.drawer.open = !this.drawer.open
  }
}

export default new AppStore();