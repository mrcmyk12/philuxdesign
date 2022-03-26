import React from "react";
import {
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink,
	NavbarBrand,
	Navbar
} from "reactstrap";
import { Link } from "react-router-dom";


function Headers() {
	return (
		<div style={{ background: "#282828"}}>
			<nav>
				<Navbar>
					<Nav style={{ marginTop: "10px" }}>
						<Link to="/" style={{ textDecorationLine: "none" }}>
							<NavbarBrand to="/" className="header-brand">
								PS
							</NavbarBrand>
						</Link>
						<NavItem className="header-text">
							<Link to="/projects" className="header-text">
								Projects
							</Link>
						</NavItem>
						<NavItem className="header-text">
							<Link to="/about" className="header-text">
								About
							</Link>
						</NavItem>
						<NavItem>
							<a
								target="_blank"
								className="header-text"
								href="https://docs.google.com/document/d/1QnloeGX3ZHIdMqb_uis5Zru7Zh2hiX58p24totBeva8/edit?usp=sharing">
								Resume
							</a>
						</NavItem>
					</Nav>
				</Navbar>
			</nav>
		</div>
	);
}
export default Headers;
