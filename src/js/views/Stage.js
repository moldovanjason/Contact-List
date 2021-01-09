import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Stage() {
	return (
		<>
			<div className="stagePage">
				<Link className="stageButton btn btn-primary" to="/">
					Home Page
				</Link>
				<div className="stages">
					<div className="vl1">
						<div className="title">New Client</div>
						<div>hello</div>
					</div>
					<div className="vl2">
						<div className="title">Not Interested</div>
					</div>
					<div className="vl3">
						<div className="title">Interested</div>
					</div>
					<div className="vl4">
						<div className="title">Closed</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stage;
