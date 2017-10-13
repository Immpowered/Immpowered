import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './PickBackground.css';

@inject("store")
@observer
class PickBackground extends Component {
    onClick = () => {
        this.props.store.start()
    }
    render() { 
        const backgrounds = ['Banking & Finance', 'Engineering', 'Governemnt & Policy', 'Healthcare', 'Education', 'Computer Science', 'Design', 'Journalism', 'Operations', 'Human Resources', 'IT', 'Sales', 'Construction']
        return (
            <div className="pick-background">
                <h2>Your background is</h2>
                <select>
                {backgrounds.map(function(name, index){
                    return <option value = {name}> {name} </option>
                })}
                </select>
            </div>
        );
    }
}

export default PickBackground;     