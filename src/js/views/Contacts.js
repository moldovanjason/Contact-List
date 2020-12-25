import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.js";
import Navbar from "../component/navbar";

export const Contacts = () => {
	return (
		<div className="container">
			{/* <Navbar /> */}
			<Context.Consumer>
				{({ store, actions }) => (
					<div>
						<div>
							<p className="text-right my-3">
								<Link className="stageofcontact btn btn-primary" to="/stage">
									Stage of contact
								</Link>
								<Link className="addnewcontact btn btn-success" to="/add">
									Add new contact
								</Link>
							</p>
						</div>
						<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
							<ul className="list-group pull-down" id="contact-list">
								{/* map allContacts from store */}
								{/* in the map call ContactCard; pass name, address ect... as props */}
								{/* <ContactCard onDelete={() => setState({ showModal: true })} /> */}
								{store.allContacts.map((value, indexOfContact) => (
									<ContactCard
										name={value.full_name}
										address={value.address}
										phone={value.phone}
										email={value.email}
										stage={value.stage}
										key={indexOfContact}
										index={indexOfContact}
										id={value.id}
									/>
								))}
							</ul>
						</div>
					</div>
				)}
			</Context.Consumer>
		</div>
	);
};
