import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FlatButton from 'material-ui/FlatButton';
import { Card } from 'material-ui/Card';
import './Landing.css';

@inject("store")
@observer
class Landing extends Component {
    onClick = () => {
        this.props.store.start()
    }
    render() {
        const button_style = {
            fontSize: "24px",
            borderRadius: '5px',
            color: 'white',
            backgroundColor: 'orange',
            height: '50px',
            width: '30%',
            padding: 'none',
            margin: 'none'
        };

        const card_style = {
            width: '600px',
            transitionDuration: '0.3s',
            padding: '26px'
        }

        return (
            <div id="landing">
                <div id="splash-text">
                    <h1>IMMPOWERED: The Guide to Help NYC Immigrants</h1>
                    <div className="paragraph">
                        <p>Did you know - There are programs in your area that are willing to provide free help to immigrants like you.</p>
                        <p>Why settle to underutilize your degree simply because it is from another country?</p>
                        <p>Let us help you find relevant and fulfilling work through nonprofits and services near you.</p>
                        <p> Use Immpowered to find free english classes, resume help, interview prep, and more!</p>
                    </div>
                
                    <h2>Jumpstart your job search</h2>
                    <ul className="service-icons">
                        <li><img
                            src={'https://media.4teachers.de/images/thumbs/image_thumb.14972.png'}
                            alt="english classes"
                            height="200" width="200"
                        ></img></li>
                        <li><img
                            src={'https://cbskool2.files.wordpress.com/2010/03/resume.gif'}
                            alt="resume"
                            height="200" width="200"
                        ></img></li>
                        <li><img
                            src={'https://www.beyond.com/data/articles/images/business-professional/14847982377_1ac7833a2e_z.jpg'}
                            alt="interview"
                            height="200" width="200"
                        ></img></li>
                    </ul>
                    <FlatButton
                        className="start-button"
                        style={button_style}
                        onClick={this.onClick}>
                        GET IMMPOWERED
                    </FlatButton>   
                </div>
                <div id="fold">
                    <Card style={card_style}>
                        <h1>something</h1>
                        
                    </Card>
                </div>
            </div>
        );
    }
}

export default Landing;     