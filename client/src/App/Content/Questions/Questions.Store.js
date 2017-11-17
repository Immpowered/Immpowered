import { observable, action, computed } from "mobx";
import AppStore from '../../App.store';

class QuestionStore {
    questions = ['English Level', 'Career Interest', 'Resume Improvement', 'Build Network', 'Job Preparation']
    @observable question_index = 0
    @observable answers = {
        'English Level': false,
        'Career Interest': '',
        'Resume Improvement': false,
        'Build Network': false,
        'Job Preparation': false
    }

    @computed get current_question(){
        return this.questions[this.question_index]
    }

    @action next_question = () => {
        this.question_index = (this.question_index + 1)
        if (this.question_index > 4) {
            AppStore.get_results()
        }
    }

    @action set_answer = (value) =>{
        this.answers[this.current_question] = value
    }
}

export default new QuestionStore();