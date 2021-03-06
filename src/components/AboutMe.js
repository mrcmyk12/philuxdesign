import React from "react";
import Header from "./Header";
import staticImg from "../images/IMG_3946.jpg";

function AboutMe() {
	return (
		<div
			style={{
				background: "#282828",
				height: "auto"
			}}>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h1
							style={{
								color: "#085fc1",
								fontFamily: "Roboto Slab",
								fontWeight: "bolder",
								marginTop: "50px",
								marginLeft: "20px"
							}}>
							About Me
						</h1>
						<p
							style={{
								fontFamily: "Roboto",
								color: "whitesmoke",
								marginLeft: "20px"
							}}>
							Hi my name is Philip. I love everything that deals with
							technology and design. I used to work at an Architecture
							firm as a project manager. However, I decided that I wanted
							a more hands-on career, so I pivoted and enrolled in a
							coding bootcamp where I learned Javascript, HTML, CSS, the
							MERN Stack, and how to build native mobile apps. At the
							same time I enrolled in the Google UX Design Program, and
							that is where I found my true calling. I found a passion
							for designing applications that not only were easy to use,
							but also made life a bit easier for the people using them.
							I love UX Design because I feel that one of my inherit
							traits is empathy, and I feel that I get to exploit that
							trait in UX Design. I love to learn new things, which is
							why in my free time, you can find me taking Udemy Courses
							to learn new skills and technology (right now I am learning
							Blockchain Technology, C#, Photography, & Graphic Design).
							Thanks for stopping by, I hope to hear from you soon.
						</p>
					</div>
					<div className="col-lg-6" style={{alignContent:'center'}}>
						<img
							style={{
								height: "500px",
								borderRadius: "5px",
								marginTop: "50px"
							}}
							src={staticImg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
