import { observable, action, computed } from "mobx";
import data from './data.json';
import QuestionStore from '../Questions/Questions.Store';

class ResultsStore {
    @computed get state(){
        let all_states = ['English Level', 'Career Interest', 'Resume Improvement', 'Build Network', 'Job Preparation']
        return all_states.filter((state)=>{ 
            return QuestionStore.answers[state]
        })
    } 

    @observable state_index = 0

    potential_results = JSON.parse(data)
    @computed get current_results(){
        const tag_to_state = {
            'English' : 'English Level',
            'Career Interest': 'Career Interest',
            'Network': 'Build Network',
            'Job Placement': 'Job Preparation',
            'Resume': 'Resume Improvement'
        }
  
        return this.potential_results.filter((result)=>{
            return tag_to_state[result['Tag']] === this.current_state
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