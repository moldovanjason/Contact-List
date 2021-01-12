const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: []
		},
		actions: {
			addContacts: (name, address, phone, email, stage) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
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
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/expAgendaForCohortIII")
							.then(data => data.json())
							.then(data => setStore({ allContacts: data }));
					})
					.catch(err => alert(err.message));
			},

			deleteContacts: idToDelete => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${idToDelete}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/expAgendaForCohortIII")
							.then(red => red.json())
							.then(data => setStore({ allContacts: data }));
					})
					.catch(err => alert(err.message));
			},

			editContact: (name, address, phone, email, stage, id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
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
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/expAgendaForCohortIII")
							.then(res => res.json())
							.then(data => setStore({ allContacts: data }));
					})
					.catch(err => alert(err.message));
			}
		}
	};
};

export default getState;


