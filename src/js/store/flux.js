const host = "https://3000-a7b3b9a3-7a6e-4066-bbf8-eca2e9a8c0f5.ws-us03.gitpod.io";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: []
		},
		actions: {
			addContacts: (name, address, phone, email, stage) => {
				fetch(`${host}/user`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email,
						agenda_slug: "expAgendaForCohortIII",
						address,
						phone,
						stage
					})
				})
					.then(data => data.json().then(response => ({ status: data.status, resMsg: response.msg })))
					.then(({ status, resMsg }) => {
						if (status === 400) alert(resMsg);
					})
					.then(() => {
						fetch(host)
							.then(data => data.json())
							.then(data => setStore({ allContacts: data }));
					})
					.catch(err => alert(err.message));
			},

			deleteContacts: idToDelete => {
				fetch(`${host}/user/${idToDelete}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					.then(() => {
						fetch(host)
							.then(red => red.json())
							.then(data => setStore({ allContacts: data }));
					})
					.catch(err => alert(err.message));
			},

			editContact: (name, address, phone, email, stage, id) => {
				fetch(`${host}/user/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						agenda_slug: "expAgendaForCohortIII",
						full_name: name,
						email,
						address,
						phone,
						stage
					})
				})
					.then(data => data.json().then(response => ({ status: data.status, resMsg: response.msg })))
					.then(({ status, resMsg }) => {
						if (status === 400) alert(resMsg);
					})
					.then(() => {
						fetch("API")
							.then(res => res.json())
							.then(data => setStore({ allContacts: data }));
					})
					.catch(err => alert(err.message));
			}
		}
	};
};

export default getState;
