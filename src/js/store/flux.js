const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: []
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

			editContact: (name, address, phone, email, indexDel) => {
				const store = getStore();
				const modContact = { name, address, phone, email };
				const updatedContact = store.allContacts.map((value, index) =>
					index === indexDel ? modContact : value
				);
				setStore({ allContacts: updatedContact });
			}

			// addContacts(...args) {
			//     const store = getStore();
			//     const newObjArr = args.reduce((obj, value) => {
			//     const newObj = {};
			//         newObj[value] = value
			//         return {...obj, newObj}});
			//     const newState = store.allContact.concat(newObjArr)
			//     setStore({allContact: newState})
			// },

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
