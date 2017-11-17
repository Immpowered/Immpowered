import { Card, CardTitle } from 'material-ui/Card';
import React, { Component } from 'react';
// import InfoStore from '../info.Store';

import { teal500, yellow700, purple500, orange500, brown400 } from 'material-ui/styles/colors';
import QuestionStore from '../Questions.Store';
import './InfoCard.css';

export default class InfoCard extends Component {
    get_icon_style = () => {
        const color_map = [teal500, yellow700, purple500, orange500, brown400]
        let curr_index = QuestionStore.question_index
        let color = color_map[curr_index]
        return {
            backgroundColor: color,
            color: 'white',
		    margin: '20px',
		    width: '400px',
		    height: '500px',
		    transitionDuration: '0.3s',
		    padding: '26px',
        }
    }
    render() {
	    const card_title_style = {
	    	color:'white',
	    	padding: '10px 0',
	    	fontSize: '500px'
	    }    	
        return (
            <Card style={this.get_icon_style()} >
                <CardTitle className="info-title" title={this.props.title} style={card_title_style} />
                <div className="info">
                    <p>{this.props.text}</p>

                </div>
            </Card>
        );
    }
}
