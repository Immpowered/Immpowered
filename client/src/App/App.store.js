import { observable, action } from "mobx";

class AppStore {
  @observable drawer = {
    'open': false
  }
  @observable content = 'landing';
  @observable career_interest = '';

  @action start = () =>{
    this.content = 'questions'
  }

  @action get_results = () =>{
    this.content = 'results'
  }

  @action toggle_drawer = () =>{
    this.drawer.open = !this.drawer.open
  }
  @action set_career = (value) => {
    this.career_interest = value
  }
}

export default new AppStore();