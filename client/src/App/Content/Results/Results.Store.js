import { observable, action, computed } from "mobx";
import data from './data.json';

class ResultsStore {
    state = ['English Level', 'Career Interest', 'Resume Improvement', 'Build Network', 'Job Preparation']
    potential_results = JSON.parse(data)
    @observable state_index = 0

    @computed get current_results(){
        const tag_to_state = {
            'English' : 'English Level',
            'Career Interest': 'Career Interest',
            'Network': 'Build Network',
            'Job Placement': 'Job Preparation',
            'Resume': 'Resume Improvement'
        }
        
        window.derp = this.potential_results

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