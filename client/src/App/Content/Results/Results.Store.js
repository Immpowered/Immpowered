import { observable, action, computed } from "mobx";
import QuestionStore from '../Questions/Questions.Store';

class ResultsStore {
    state = ['English Level', 'Career Interest', 'Resume Improvement', 'Build Network', 'Job Preparation']
    @observable state_index = 0

    @computed get current_results(){
        return this.state[this.state_index]
    }

    @action next_result = () => {
        this.state_index = (this.state_index + 1)
    }
}

export default new ResultsStore();