import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar fixed-top bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img style={{height:"50px", width:"auto"}} src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" />
				</Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	  </div>
	);
};
