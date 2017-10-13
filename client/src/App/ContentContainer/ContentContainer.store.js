import { observable, action } from "mobx";
import results from './ResultPage/results.json';

export default class ContentContainerStore {
  @observable content = 'landing';
  @observable filter_keywords = '';
  @observable displayed_results = results;

  @action filter_results() {
  	console.log(this.filter_keywords);
  	console.log("HELLOOOOOOOO");
  	console.log(this.filter_keywords);
  	// filter the displayed results by the text
  	this.displayed_results = results.filter(function (result) {
    	return (result['Name'].includes(this.filter_keywords) || result['Description'].includes(this.filter_keywords));
	}, this);
  }

  @action update_text(text) {
  	this.filter_keywords = text;
  }

  @action start() {
    this.content = 'background';
  }

  @action choose_background() {
  	this.content = 'results';
  }
}