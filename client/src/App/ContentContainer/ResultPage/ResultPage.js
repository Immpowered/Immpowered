import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Select from 'react-select';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


import 'react-select/dist/react-select.css';
import './ResultPage.css';

@inject("store")
@observer
class ResultPage extends Component {
    update_text = (event) => {
        this.props.store.update_text(event.target.value)
    }
    onClick = () =>{
    	this.props.store.filter_results()
    }
	render() { 
		return (
			<div className="result-page">
				<div className="filterbox">
					<Card>
						<CardTitle>Filter your results</CardTitle>
						<input type="text" onChange={this.update_text} value={this.props.store.filter}/>
						<Button onClick={this.onClick}>Filter</Button>
					</Card>
				</div>
				
				<div className="results">
					{ this.props.store.displayed_results.map((result)=>{
					return <Card>
						<CardTitle>{result['Name']}</CardTitle>
						<CardText>{result['Description']}</CardText>
						<Button><a href={result['Link']}>Learn More</a></Button>
					</Card>
					})}
				</div>
			</div>
			)}
	}

export default ResultPage;     