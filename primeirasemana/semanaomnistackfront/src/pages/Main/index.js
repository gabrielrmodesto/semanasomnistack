import React, { Component } from 'react';
import api from "../../services/api";
import logo from '../../assets/img/logo.png';
import './style.css';

export default class Main extends Component {
	state = {
		newBox: ''
	};
	
	handleSubmit = async e => {
		e.preventDefault();

		const response = await api.post('/boxes', {
			title: this.state.newBox
		});

		this.props.history.push(`/box/${response.data._id}`);
	};

	handleInputChange = (e) => {
		this.setState({ newBox : e.target.value });
	};
	render() {
		return (
			<div id="main-container">
				<form onSubmit={this.handleSubmit} action="">
					<img src={logo} alt="" id="logorocket" />
					<input
						placeholder="Criar uma box"
						onChange={this.handleInputChange}
						value={this.state.newBox}
					/>
					<button type="submit">Criar</button>
				</form>
			</div>
		);
	}
}
