import React, { Component } from "react";
import "./App.css";
import Header from './components/Header'

import Main from "./components/Main";
import { BrowserRouter} from "react-router-dom";


class App extends Component {
	constructor(props) {
		super(props);


	}

	render() {
		return (
			<div>
				
					<Main />
				
			</div>
		
		);
	}
}

export default App;
