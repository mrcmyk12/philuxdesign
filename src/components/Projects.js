import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../shared/projects";
import Header from "./Header";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: projects
		};
	}

	render() {
		const projects = this.state.projects.map((project) => {
			if (project.id === 2) {
				return (
					<div
						style={{ background: "#282828", margin_top: "50px" }}
						className="container">
						<div className="row" style={{ margin_top: "50px" }}>
							<div className="col-lg-4 align-items-center">
								<Link
									style={{ textDecorationLine: "none" }}
									to={`/${project.id}`}
									key={project.id}>
									<div className="row align-items-center">
										<img
											className="title-project-image"
											style={{
												height: "200px",
												padding_top: "50px"
											}}
											src={project.projectimage}
										/>
									</div>
								</Link>
							</div>
							<div className="col-lg-8">
								<h1
									style={{
										fontFamily: "Alfa Slab One",
										fontWeight: "bold",
										color: "#c23728",
										marginTop: "35px",
										marginLeft: "30px",
										textAlign: "center"
									}}>
									{project.projecttitle}
								</h1>
								<h4
									style={{
										fontFamily: "Roboto",
										color: "#d98f07",
										marginLeft: "30px",
										fontWeight: "bold",
										marginTop: "0px"
									}}>
									{project.projectrole}
								</h4>
								<p
									style={{
										fontFamily: "Roboto",
										color: "white",
										marginLeft: "30px",
										marginTop: "20px",
										fontWeight: "bold"
									}}>
									{project.description}
								</p>
								<Link
									style={{ textDecorationLine: "none" }}
									to={`/${project.id}`}
									key={project.id}>
									<h4
										style={{
											marginLeft: "30px",
											fontFamily: "Roboto",
											fontWeight: "bold"
										}}>
										Link to Case Study
										<FontAwesomeIcon
											style={{ marginLeft: "15px" }}
											icon={faArrowCircleRight}
										/>
									</h4>
								</Link>
							</div>
						</div>
						<hr
							style={{
								color: "#d98f07",
								height: "3px",
								borderRadius: "10px"
							}}
						/>
					</div>
				);
			}

			return (
				<div style={{ background: "#282828" }} className="container">
					<div className="row">
						<div className="col-lg-4">
							<Link
								style={{ textDecorationLine: "none" }}
								to={`/${project.id}`}
								key={project.id}>
								<img
									className="title-project-image"
									src={project.projectimage}
								/>
							</Link>
						</div>
						<div className="col-lg-8">
							<h1
								style={{
									fontFamily: "Alfa Slab One",
									fontWeight: "bold",
									color: "#c23728",
									marginTop: "35px",
									marginLeft: "30px",
									textAlign: "center"
								}}>
								{project.projecttitle}
							</h1>
							<h4
								style={{
									fontFamily: "Roboto",
									color: "#d98f07",
									marginLeft: "30px",
									fontWeight: "bold",
									marginTop: "0px"
								}}>
								{project.projectrole}
							</h4>
							<p
								style={{
									fontFamily: "Roboto",
									color: "white",
									marginLeft: "30px",
									marginTop: "20px",
									fontWeight: "bold"
								}}>
								{project.description}
							</p>
							<Link
								style={{ textDecorationLine: "none" }}
								to={`/${project.id}`}
								key={project.id}>
								<h4
									style={{
										marginLeft: "30px",
										fontFamily: "Roboto",
										fontWeight: "bold"
									}}>
									Link to Case Study
									<FontAwesomeIcon
										style={{ marginLeft: "15px" }}
										icon={faArrowCircleRight}
									/>
								</h4>
							</Link>
						</div>
					</div>
					<hr
						style={{
							color: "#d98f07",
							height: "3px",
							borderRadius: "10px"
						}}
					/>
				</div>
			);
		});

		return (
			<div style={{ background: "#282828" }}>
				<Header />
				<div>{projects}</div>
			</div>
		);
	}
}

export default Projects;
