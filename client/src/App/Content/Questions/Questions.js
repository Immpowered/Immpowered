import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './Questions.css';

@inject("store")
@observer
export default class Questions extends Component {
    onChange = (event) => {
        this.props.store.set_career(event.target.innerText);  
    }
    render() { 
        const careers = ["Finance", "Computer Science", "Engineering"]
        return (
            <div id="questions">
                <SelectField 
                    floatingLabelText="Career Interests"
                    labelStyle={{color: '#fff'}}
                    value={this.props.store.career_interest}
                    onChange={this.onChange}>
                    {careers.map((name, index) =>{
                        return <MenuItem key={name} value={name} primaryText={name} />
                    })}
                </SelectField>
            </div>
        );
    }
}
