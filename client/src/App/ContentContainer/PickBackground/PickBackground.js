import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './PickBackground.css';

@inject("store")
@observer
class PickBackground extends Component {
    onClick = () => {
        this.props.store.choose_background()
    }
    render() { 
        const backgrounds = ['Banking & Finance', 'Engineering', 'Governemnt & Policy', 'Healthcare', 'Education', 'Computer Science', 'Design', 'Journalism', 'Operations', 'Human Resources', 'IT', 'Sales', 'Construction']
        const options = backgrounds.map((value)=>{
            return {
                'value': value,
                'label': value
            }})

        return (
            <div className="pick-background">
                <h2>Your background is</h2>
                <Select name="select-background" options={options} onChange={this.onClick}/>
            </div>
        );
    }
}

export default PickBackground;     