import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const [disabledButton, setDisabledButton] = useState(true);
	const [state, setState] = useState({
		name: null,
		address: null,
		phone: null,
		email: null,
		stage: null
	});

	useEffect(() => {
		if (state.name && state.address && state.phone && state.email && state.stage) {
			setDisabledButton(false);
		} else {
			setDisabledButton(true);
		}
	}, [state]);

	return (
		<div className="container">
			<Context.Consumer>
				{({ actions, store }) => (
					<div>
						<h1 className="text-center mt-5">Add a new contact</h1>
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									onChange={event => {
										setState({ ...state, name: event.target.value });
									}}
									type="text"
									className="form-control"
									placeholder="Full Name"
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									onChange={event => {
										setState({ ...state, email: event.target.value });
									}}
									type="email"
									className="form-control"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									onChange={event => {
										setState({ ...state, phone: event.target.value });
									}}
									type="phone"
									className="form-control"
									placeholder="Enter phone number"
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									onChange={event => {
										setState({ ...state, address: event.target.value });
									}}
									type="text"
									className="form-control"
									placeholder="Enter address"
								/>
							</div>
							<div className="selectEdit">
								<label>Stage</label>
								<select
									className="form-control"
									placeholder="Select Stage"
									onChange={event => {
										setState({ ...state, stage: event.target.value });
									}}>
									<option value="">Select Stage</option>
									<option>New Client</option>
									<option>Interested</option>
									<option>Not Interested</option>
									<option>Closed</option>
								</select>
							</div>
							<button
								disabled={disabledButton}
								onClick={() => {
									actions.addContacts(
										state.name,
										state.address,
										state.phone,
										state.email,
										state.stage
									);
									props.history.push("/");
								}}
								type="button"
								className={`btn ${disabledButton ? "btn-secondary" : "btn-primary"} form-control`}>
								save
							</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or go back to contacts
							</Link>
						</form>
					</div>
				)}
			</Context.Consumer>
		</div>
	);
};

AddContact.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};


/////