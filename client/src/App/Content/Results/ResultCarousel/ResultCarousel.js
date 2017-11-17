import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ResultStore from '../Results.Store';
import { Carousel } from 'react-responsive-carousel';

@observer
export default class Results extends Component {
    build_card = (result_obj) => {
        const card_style = {
            transitionDuration: '0.3s',
            height: '100%',
            width: '80%'
        }
        return (
            <Card style={card_style}>
                <CardTitle title={result_obj["Name"]} subtitle={"HTTP://FILL_IN_LATER.COM"} />
                <CardText>{result_obj["Description"]}</CardText>
                <CardActions>
                    <FlatButton label="Prev" primary={true} onClick={ResultStore.next_result} />
                    <FlatButton label="Next" primary={true} onClick={ResultStore.next_result} />
                </CardActions>
            </Card>
        )
    }
    render() {
        return (
            <Carousel className="carousel" centerMode={true} showArrows={true} infiniteLoop={true} useKeyboardArrows={true}>
                {ResultStore.current_results.map(this.build_card)}
            </Carousel>
        );
    }
}


