import { Card, CardTitle } from 'material-ui/Card';
import React, { Component } from 'react';

import { teal500, yellow700, purple500, orange500, brown400 } from 'material-ui/styles/colors';
import QuestionStore from '../Questions.Store';
import './InfoCard.css';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';

export default class InfoCard extends Component {
    get_icon_style = () => {

        // const color_map = [ '#1ca8a9', '#f4ad3d', '#57365d', '#f0642a', '#393e41']
        const color_map = [ 'rgba(28,168,169,0.3)', 'rgba(244,173,69,0.3)', 'rgba(87,54,93,0.3)', 'rgba(240,100,42,0.3)', 'rgba(57,62,65,0.3)']
        
        let curr_index = QuestionStore.question_index
        let color = color_map[curr_index]
        return {
            backgroundColor: color,
            color: 'dimgray',
            fontSize: '1.5em',
            lineHeight: '1.2em',
		    margin: '20px',
		    width: '30vw',
		    height: '600px',
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
                <HelpOutline style="fontsize: 48px;"/>
                <div className="info">
                    <p>{this.props.text}</p>

                </div>
            </Card>
        );
    }
}
