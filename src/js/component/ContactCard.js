import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

const ContactCard = props => {
	console.log(props);
	return (
		<li className="list-group-item">
			<Context.Consumer>
			{({ store, actions }) => (
				<div className="row w-100">
					{/* <div className="col-12 col-sm-6 col-md-3 px-0">
							<img
								src={MikePhoto}
								alt="Insert Photo"
								className="rounded-circle mx-auto d-block img-fluid"
							/>
						</div> */}
					<div className="col-12 col-6 text-center text-sm-left">
						<div className="editdelbutton float-right">
							<button className="btn" onClick={() => props.history.push(`/edit/${props.id}`)}>
								<i className="fas fa-pencil-alt mr-3" />
							</button>
							<button className="btn" onClick={() => actions.deleteContacts(props.id)}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{props.name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">{props.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-414*"
						/>
						<span className="text-muted small">{props.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">{props.email}</span>
						<br />
						<span className="text-muted small text-truncate">{props.stage}</span>
					</div>
				</div>
			)}
			</Context.Consumer>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	index: PropTypes.number,
	name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	stage: PropTypes.string,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};

export default withRouter(ContactCard);
