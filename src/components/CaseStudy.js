import React from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../shared/projects";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function CaseStudy() {
	let params = useParams();
	let caseStudy = getProject(parseInt(params.id, 10));

	if(caseStudy.id === 2 || caseStudy.id === 3){
		return(
			<div style={{ background: "#282828", height:'auto'}}>
			<Header />
			<div className="container">
				<h1
					style={{
						textAlign: "center",
						color: "#c23728",
						fontFamily: "Alfa Slab One",
						marginTop: "100px",
						fontSize: "75px"
					}}>
					{caseStudy.projecttitle}
				</h1>
				<h6
					style={{
						textAlign: "center",
						fontFamily: "Roboto",
						color: "#d98f07",
						fontWeight: "bold"
					}}>
					{caseStudy.onedescription}
				</h6>
				<div style={{ textAlign: "center", marginTop:"20px"}}>
						<a
							target="_blank"
							href={caseStudy.websitelink}
							style={{
								fontWeight: "bold",
								color: "#d98f07",
								fontFamily: "Roboto Slab",
								fontSize: "25px",
								marginTop:"50px",
								textDecorationLine: "none"
							}}>
							Link to Deployed Website
							<FontAwesomeIcon
								style={{ marginLeft: "15px" }}
								icon={faArrowCircleRight}
							/>
						</a>
					</div>
				<div style={{ textAlign: "center", marginBottom: "50px" }}>
						<a
							target="_blank"
							href={caseStudy.githublink}
							style={{
								fontWeight: "bold",
								color: "#c23728",
								fontFamily: "Roboto Slab",
								fontSize: "18px",
								textDecorationLine: "none"
							}}>
							Link to Github Repo
							<FontAwesomeIcon
								style={{ marginLeft: "15px" }}
								icon={faArrowCircleRight}
							/>
						</a>
					</div>
				<div className="row" style={{ marginTop: "100px" }}>
					<div className="col-md-6">
						<img
							style={{ height: "225px" }}
							src={caseStudy.projectimage}
						/>
					</div>
					<div className="col-md-6">
						<h2
							style={{
								fontFamily: "Roboto Slab",
								color: "white",
								fontWeight: "bolder"
							}}>
							{caseStudy.projecttitle}
						</h2>
						<h4
							style={{
								color: "#d98f07",
								textAlign: "center",
								fontFamily: "Roboto"
							}}>
							"{caseStudy.projectprompt}"
						</h4>
						<div className="row">
							<div className="col-md-5">
								<h3
									style={{
										fontFamily: "Roboto Slab",
										color: "#c23728",
										marginTop: "40px",
										fontWeight: "bold"
									}}>
									Problem:
								</h3>
								<p style={{ fontFamily: "Roboto", color: "white" }}>
									{caseStudy.problem}
								</p>
							</div>
							<div className="col-md-6">
								<h3
									style={{
										fontFamily: "Roboto Slab",
										color: "#c23728",
										marginTop: "40px",
										fontWeight: "bold",
									
									}}>
									Goal:
								</h3>
								<p
									style={{
										fontFamily: "Roboto",
										color: "white",
									
									}}>
									{caseStudy.goal}
								</p>
							</div>
						</div>
						<div>
							<h3
								style={{
									fontFamily: "Roboto Slab",
									color: "#c23728",
									fontWeight: "bold"
								}}>
								My Role:
							</h3>
							<p
								style={{
									fontFamily: "Roboto",
									color: "white"
								}}>
								{caseStudy.myrole}
							</p>
						</div>
					</div>
				</div>
				<hr
					style={{ color: "#d98f07", height: "3px", borderRadius: "10px" }}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold"
					}}>
					User Research Summary
				</h1>
				<p
					style={{
						fontFamily: "Roboto",
						color: "white",
						fontSize: "20px"
					}}>
					{caseStudy.researchsummary}
				</p>
				<div>
					<h1
						style={{
							textAlign: "center",
							color: "#c23728",
							fontFamily: "Roboto Slab",
							fontWeight: "bold",
							marginTop: "50px",
							marginBottom: "50px"
						}}>
						Pain Points
					</h1>
					<div
						className="row"
						style={{
							flexWrap: "wrap",
							alignContent: "center",
							marginBottom: "75px"
						}}>
						<div className="col-md-4">
							<h3
								style={{
									color: "#d98f07",
									fontFamily: "Roboto Slab",
									textAlign: "center"
								}}>
								{caseStudy.painpointstitle1}
							</h3>
							<p style={{ color: "white", textAlign: "center" }}>
								{caseStudy.painpointscontent1}
							</p>
						</div>
						<div className="col-md-4">
							<h3
								style={{
									color: "#d98f07",
									fontFamily: "Roboto Slab",
									textAlign: "center"
								}}>
								{caseStudy.painpointstitle2}
							</h3>
							<p style={{ color: "white", textAlign: "center" }}>
								{caseStudy.painpointscontent2}
							</p>
						</div>
						<div className="col-md-4">
							<h3
								style={{
									color: "#d98f07",
									fontFamily: "Roboto Slab",
									textAlign: "center"
								}}>
								{caseStudy.painpointstitle3}
							</h3>
							<p style={{ color: "white", textAlign: "center" }}>
								{caseStudy.painpointscontent3}
							</p>
						</div>
					</div>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<div>
					<h1
						style={{
							color: "#085fc1",
							fontSize: "50px",
							fontFamily: "Roboto Slab",
							fontWeight: "bold",
							marginTop: "50px",
							textAlign: "center"
						}}>
						Figma Design
					</h1>
					<div style={{ textAlign: "center", marginBottom: "50px" }}>
						<a
							target="_blank"
							href={caseStudy.figmalink}
							style={{
								fontWeight: "bold",
								color: "#d98f07",
								fontFamily: "Roboto Slab",
								fontSize: "25px",
								textDecorationLine: "none"
							}}>
							Link to Figma Template
							<FontAwesomeIcon
								style={{ marginLeft: "15px" }}
								icon={faArrowCircleRight}
							/>
						</a>
					</div>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<div>
				<h1
						style={{
							color: "#085fc1",
							fontSize: "50px",
							fontFamily: "Roboto Slab",
							fontWeight: "bold",
							marginTop: "50px",
							marginBottom:"50px",
							textAlign: "center"
						}}>
						Site Screenshots
					</h1>
				</div>
				<div className="row">

						<img
							style={{  marginBottom:"25px" }}
							src={caseStudy.sitescreenshot1}
						/>


						<img
							style={{ marginBottom:"25px" }}
							src={caseStudy.sitescreenshot2}
						/>


						<img
							style={{ marginBottom:"25px"}}
							src={caseStudy.sitescreenshot3}
						/>

				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold",
						marginTop: "50px"
					}}>
					TakeAways
				</h1>
				<div className="row">
					<div className="col-md-6">
						<h3
							style={{
								fontFamily: "Roboto Slab",
								color: "#c23728",
								marginTop: "40px",
								fontWeight: "bold"
							}}>
							Impact:
						</h3>
						<p style={{ fontFamily: "Roboto", color: "white" }}>
							{caseStudy.impact}
						</p>
					</div>
					<div className="col-md-6" style={{ }}>
						<h3
							style={{
								fontFamily: "Roboto Slab",
								color: "#c23728",
								marginTop: "40px",
								fontWeight: "bold"
							}}>
							What I Learned:
						</h3>
						<p style={{ fontFamily: "Roboto", color: "white" }}>
							{caseStudy.learned}
						</p>
					</div>
				</div>
                <h1
				style={{
					color: "#085fc1",
					fontSize: "40px",
					fontFamily: "Roboto Slab",
					fontWeight: "bold",
					marginTop: "50px",
					textAlign: "center",
					marginBottom: "75px"
				}}>
				Next Steps
			</h1>
            <div>
            <div
					className="row"
					style={{
						flexWrap: "wrap",
						alignContent: "center",
						marginBottom: "75px"
					}}>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							{caseStudy.steptitle1}
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.step1}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							{caseStudy.steptitle2}
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.step2}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							{caseStudy.steptitle3}
						</h3>
						<p style={{ color: "white", textAlign: "center", marginBottom:'100px' }}>
							{caseStudy.step3}
						</p>
					</div>
				</div>
            </div>
			</div>
		</div>
		);
	} else{

	return (
		<div style={{ background: "#282828", height:'auto'}}>
			<Header />
			<div className="container">
				<h1
					style={{
						textAlign: "center",
						color: "#c23728",
						fontFamily: "Alfa Slab One",
						marginTop: "100px",
						fontSize: "75px"
					}}>
					{caseStudy.projecttitle}
				</h1>
				<h6
					style={{
						textAlign: "center",
						fontFamily: "Roboto",
						color: "#d98f07",
						fontWeight: "bold"
					}}>
					{caseStudy.onedescription}
				</h6>
				<div className="row" style={{ marginTop: "100px" }}>
					<div className="col-md-6">
						<img
							style={{ height: "500px" }}
							src={caseStudy.projectimage}
						/>
					</div>
					<div className="col-md-6">
						<h2
							style={{
								fontFamily: "Roboto Slab",
								color: "white",
								fontWeight: "bolder"
							}}>
							{caseStudy.projecttitle}
						</h2>
						<h4
							style={{
								color: "#d98f07",
								textAlign: "center",
								fontFamily: "Roboto"
							}}>
							"{caseStudy.projectprompt}"
						</h4>
						<div className="row">
							<div className="col-md-5">
								<h3
									style={{
										fontFamily: "Roboto Slab",
										color: "#c23728",
										marginTop: "40px",
										fontWeight: "bold"
									}}>
									Problem:
								</h3>
								<p style={{ fontFamily: "Roboto", color: "white" }}>
									{caseStudy.problem}
								</p>
							</div>
							<div className="col-md-6">
								<h3
									style={{
										fontFamily: "Roboto Slab",
										color: "#c23728",
										marginTop: "40px",
										fontWeight: "bold",
									
									}}>
									Goal:
								</h3>
								<p
									style={{
										fontFamily: "Roboto",
										color: "white",
									
									}}>
									{caseStudy.goal}
								</p>
							</div>
						</div>
						<div>
							<h3
								style={{
									fontFamily: "Roboto Slab",
									color: "#c23728",
									fontWeight: "bold"
								}}>
								My Role:
							</h3>
							<p
								style={{
									fontFamily: "Roboto",
									color: "white"
								}}>
								{caseStudy.myrole}
							</p>
						</div>
					</div>
				</div>
				<hr
					style={{ color: "#d98f07", height: "3px", borderRadius: "10px" }}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold"
					}}>
					User Research Summary
				</h1>
				<p
					style={{
						fontFamily: "Roboto",
						color: "white",
						fontSize: "20px"
					}}>
					{caseStudy.researchsummary}
				</p>
				<div>
					<h1
						style={{
							textAlign: "center",
							color: "#c23728",
							fontFamily: "Roboto Slab",
							fontWeight: "bold",
							marginTop: "50px",
							marginBottom: "50px"
						}}>
						Pain Points
					</h1>
					<div
						className="row"
						style={{
							flexWrap: "wrap",
							alignContent: "center",
							marginBottom: "75px"
						}}>
						<div className="col-md-4">
							<h3
								style={{
									color: "#d98f07",
									fontFamily: "Roboto Slab",
									textAlign: "center"
								}}>
								{caseStudy.painpointstitle1}
							</h3>
							<p style={{ color: "white", textAlign: "center" }}>
								{caseStudy.painpointscontent1}
							</p>
						</div>
						<div className="col-md-4">
							<h3
								style={{
									color: "#d98f07",
									fontFamily: "Roboto Slab",
									textAlign: "center"
								}}>
								{caseStudy.painpointstitle2}
							</h3>
							<p style={{ color: "white", textAlign: "center" }}>
								{caseStudy.painpointscontent2}
							</p>
						</div>
						<div className="col-md-4">
							<h3
								style={{
									color: "#d98f07",
									fontFamily: "Roboto Slab",
									textAlign: "center"
								}}>
								{caseStudy.painpointstitle3}
							</h3>
							<p style={{ color: "white", textAlign: "center" }}>
								{caseStudy.painpointscontent3}
							</p>
						</div>
					</div>
				</div>
				<hr
					style={{ color: "#d98f07", height: "3px", borderRadius: "10px" }}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold",
						marginTop: "50px"
					}}>
					Persona
				</h1>
				<p
					style={{
						fontFamily: "Roboto",
						color: "white",
						fontSize: "20px"
					}}>
					{caseStudy.persona}
				</p>
				<div>
					<img
						style={{
							height: "250px"
						}}
						src={caseStudy.personaimage}
					/>
					<img
						style={{
							height: "250px",
							marginLeft: "50px",
                            marginBottom:'50px'
						}}
						src={caseStudy.personauserjourneymap}
					/>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<div>
					<h1
						style={{
							color: "#085fc1",
							fontSize: "50px",
							fontFamily: "Roboto Slab",
							fontWeight: "bold",
							marginTop: "50px"
						}}>
						Digital Wireframes
					</h1>
					<div className="row">
						<div className="col-md-4">
							<img
								style={{ height: "400px" }}
								src={caseStudy.digitalwireframe1}
							/>
						</div>
						<div className="col-md-4">
							<img
								style={{ height: "400px" }}
								src={caseStudy.digitalwireframe2}
							/>
						</div>
						<div className="col-md-4">
							<img
								style={{ height: "400px" }}
								src={caseStudy.digitalwireframe3}
							/>
						</div>
					</div>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold",
						marginTop: "50px",
						textAlign: "center"
					}}>
					Usability Study Findings
				</h1>
				<div style={{ textAlign: "center", marginBottom: "50px" }}>
					<a
						target="_blank"
						href={caseStudy.lowfidelitylink}
						style={{
							fontWeight: "bold",
							color: "#d98f07",
							fontFamily: "Roboto Slab",
							fontSize: "25px",
							textDecorationLine: "none"
						}}>
						Link to Low Fidelity Prototype
						<FontAwesomeIcon
							style={{ marginLeft: "15px" }}
							icon={faArrowCircleRight}
						/>
					</a>
				</div>
				<div
					className="row"
					style={{
						flexWrap: "wrap",
						alignContent: "center",
						marginBottom: "75px"
					}}>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							1
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.usabilityfinding1}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							2
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.usabilityfinding2}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							3
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.usabilityfinding3}
						</p>
					</div>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<div>
					<h1
						style={{
							color: "#085fc1",
							fontSize: "50px",
							fontFamily: "Roboto Slab",
							fontWeight: "bold",
							marginTop: "50px",
							textAlign: "center"
						}}>
						Mock-Ups
					</h1>
					<div style={{ textAlign: "center", marginBottom: "50px" }}>
						<a
							target="_blank"
							href={caseStudy.highfidelitylink}
							style={{
								fontWeight: "bold",
								color: "#d98f07",
								fontFamily: "Roboto Slab",
								fontSize: "25px",
								textDecorationLine: "none"
							}}>
							Link to High Fidelity Prototype
							<FontAwesomeIcon
								style={{ marginLeft: "15px" }}
								icon={faArrowCircleRight}
							/>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<img
							style={{ height: "400px" }}
							src={caseStudy.digitalmockup1}
						/>
					</div>
					<div className="col-md-4">
						<img
							style={{ height: "400px" }}
							src={caseStudy.digitalmockup2}
						/>
					</div>
					<div className="col-md-4">
						<img
							style={{ height: "400px" }}
							src={caseStudy.digitalmockup3}
						/>
					</div>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold",
						marginTop: "50px",
						textAlign: "center",
						marginBottom: "75px"
					}}>
					Accessibility Considerations
				</h1>
				<div
					className="row"
					style={{
						flexWrap: "wrap",
						alignContent: "center",
						marginBottom: "75px"
					}}>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							1
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.accessibilitycontent1}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							2
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.accessibilitycontent2}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							3
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.accessibilitycontent3}
						</p>
					</div>
				</div>
				<hr
					style={{
						color: "#d98f07",
						height: "3px",
						borderRadius: "10px",
						marginTop: "50px"
					}}
				/>
				<h1
					style={{
						color: "#085fc1",
						fontSize: "50px",
						fontFamily: "Roboto Slab",
						fontWeight: "bold",
						marginTop: "50px"
					}}>
					TakeAways
				</h1>
				<div className="row">
					<div className="col-md-6">
						<h3
							style={{
								fontFamily: "Roboto Slab",
								color: "#c23728",
								marginTop: "40px",
								fontWeight: "bold"
							}}>
							Impact:
						</h3>
						<p style={{ fontFamily: "Roboto", color: "white" }}>
							{caseStudy.impact}
						</p>
					</div>
					<div className="col-md-6" style={{ }}>
						<h3
							style={{
								fontFamily: "Roboto Slab",
								color: "#c23728",
								marginTop: "40px",
								fontWeight: "bold"
							}}>
							What I Learned:
						</h3>
						<p style={{ fontFamily: "Roboto", color: "white" }}>
							{caseStudy.learned}
						</p>
					</div>
				</div>
                <h1
				style={{
					color: "#085fc1",
					fontSize: "40px",
					fontFamily: "Roboto Slab",
					fontWeight: "bold",
					marginTop: "50px",
					textAlign: "center",
					marginBottom: "75px"
				}}>
				Next Steps
			</h1>
            <div>
            <div
					className="row"
					style={{
						flexWrap: "wrap",
						alignContent: "center",
						marginBottom: "75px"
					}}>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							{caseStudy.steptitle1}
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.step1}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							{caseStudy.steptitle2}
						</h3>
						<p style={{ color: "white", textAlign: "center" }}>
							{caseStudy.step2}
						</p>
					</div>
					<div className="col-md-4">
						<h3
							style={{
								color: "#c23728",
								fontFamily: "Roboto Slab",
								textAlign: "center",
								fontWeight: "bolder"
							}}>
							{caseStudy.steptitle3}
						</h3>
						<p style={{ color: "white", textAlign: "center", marginBottom:'100px' }}>
							{caseStudy.step3}
						</p>
					</div>
				</div>
            </div>
			</div>
		</div>
	);
}
}

export default CaseStudy;
