const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: ["Jason", "pedro", "Juan"]
		},
		actions: {
			addContacts: (name, address, number, email) => {
				const store = getStore();
				const newContact = [{ name, address, number, email }];
				const finContact = store.allContacts.concat(newContact);
				setStore({ allContacts: finContact });
			},

			deleteContacts: indexDel => {
				const store = getStore();
				const newArr = store.allContacts.filter((value, index) => index !== indexDel);
				setStore({ allContacts: newArr });
			},

			editContacts: () => {}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
