import React, { Component } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Projects from "./Projects";
import CaseStudy from "./CaseStudy";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const CaseStudyID = ({ match }) => {
			<CaseStudy
				project={
					this.props.projects.filter(
						(project) => project.id === +match.params.id
					)[0]
				}
			/>;
		};

		return (
			<div style={{ background: "#282828" }}>
				<Header />
				<div className="home-page">
					<h1
						className="title-screen-text"
						style={{ marginTop: "150px", marginBottom: "0px" }}>
						Philip Sanders
					</h1>
					<h3
						className="title-screen-subtext"
						style={{ marginTop: "0px" }}>
						Website Designer, UI/UX Designer
					</h3>
					<FontAwesomeIcon icon="fab fa-js"/>
                    <h4 className="title-screen-subtext2">
						<Link style={{textDecoration:'none'}} to="/projects">
							Projects
							<FontAwesomeIcon icon={faArrowCircleRight} />
						</Link>
					</h4>
				</div>
				{/* <div>
					<Projects projects={this.props.projects} />
				</div> */}
			</div>
		);
	}
}

export default Main;
