const host = "https://3000-a7b3b9a3-7a6e-4066-bbf8-eca2e9a8c0f5.ws-us03.gitpod.io";

import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			fetch(`${host}/user`)
				.then(red => red.json())
				.then(data => setState({ ...state, store: { allContacts: data } }))
				.catch(err => alert(err.message));
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
