import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Stage() {
	return (
		<>
			<table className="stageTable">
				<thread>
					<tr>1</tr>
					<tr>2</tr>
					<tr>3</tr>
					<tr>4</tr>
				</thread>
			</table>
		</>
	);
}

export default Stage;
