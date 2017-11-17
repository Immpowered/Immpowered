import { observable, action, computed } from "mobx";
import QuestionStore from '../Questions/Questions.Store';
import data from './data.json';

class ResultsStore {
    state = ['English Level', 'Career Interest', 'Resume Improvement', 'Build Network', 'Job Preparation']
    potential_results = data
    @observable state_index = 0

    @computed get current_results(){
        const tag_to_state = {
            'English' : 'English Level',
            'Career Interest': 'Career Interest',
            'Network': 'Build Network',
            'Job Placement': 'Job Preparation',
            'Resume': 'Resume Improvement'
        }
        return this.current_results.filter((result)=>{
            tag_to_state[result['Tag']] == this.current_state
        })
    }

    @computed get current_state(){
        return this.state[this.state_index]
    }

    @action next_state = () => {
        this.state_index = (this.state_index + 1)
    }
}

export default new ResultsStore();