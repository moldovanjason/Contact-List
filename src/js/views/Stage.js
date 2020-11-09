import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Stage() {
	return (
		<>
			<div className="stagePage">
				<p className="text-right my-3">
					<Link className="addnewcontact btn btn-success" to="/">
						Back to contacts
					</Link>
				</p>
				<div className="stages">
					<div>
						<div className="newClient">New Client</div>
						<ul>
							<li>Not available</li>
							<li>Available</li>
							<li>Non</li>
						</ul>
					</div>
					<div className="newClient">New Client</div>
					<div className="Interested">Interested</div>
					<div className="notInterested">Not Interested</div>
					<div className="closed ">Closed</div>
				</div>
			</div>
		</>
	);
}

export default Stage;
