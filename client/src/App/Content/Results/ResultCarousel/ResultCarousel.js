import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ResultStore from '../Results.Store';
import { Carousel } from 'react-responsive-carousel';
import ResultCard from './ResultCard';

@observer
export default class Results extends Component {
    render() {
        return (
            <Carousel 
                className="carousel" 
                centerMode={true} 
                showArrows={false} 
                showThumbs={false}
                useKeyboardArrows={true}>
                {ResultStore.current_results.map((obj)=>{
                    return <ResultCard 
                        name={obj["Name"]} url={"Tech.Cornell.edu"} 
                        description={obj["Description"]} />
                })}
            </Carousel>
        );
    }
}


