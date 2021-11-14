import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from './components/Header'
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";

ReactDOM.render(
	<React.StrictMode>
		<div style={{background:'#282828'}}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<AboutMe />} />
				<Route path="/projects" element={<Projects />}/>
				<Route path='/:id' element={<CaseStudy/>}/>
			</Routes>
		</BrowserRouter>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
