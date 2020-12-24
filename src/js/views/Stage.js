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
					<div>
						<div>New Client</div>
					</div>
					<div>
						<div>Not Interested</div>
					</div>
					<div>
						<div>Interested</div>
					</div>
					<div>
						<div>Closed</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stage;
