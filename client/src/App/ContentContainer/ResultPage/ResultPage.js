import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Select from 'react-select';
import results from './results.json';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


import 'react-select/dist/react-select.css';
import './ResultPage.css';

@inject("store")
@observer
class ResultPage extends Component {

	render() { 
		return (
			<div className="result-page">
				<div className="filterbox">
					<Card>
						<CardTitle>Filter your results</CardTitle>
						<Button>Filter</Button>
					</Card>
				</div>
				
				<div className="results">
					{ results.map((result)=>{
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