import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard";


export const Home = () => {

  const {store, dispatch} = useGlobalReducer ()

  function getContactList () {
	
	fetch('https://playground.4geeks.com/contact/agendas/humberto/contacts')
	.then( (response) => response.json() )
	.then( (data) => {
		console.log(data.contacts)
		dispatch ({
			type: 'load_contacts',
			payload: data.contacts
		})
	} )

  }

  useEffect ( () => {
	getContactList ()
  }, [])

  function deleteContact(idToDelete) {
    console.log("deleteContact" + idToDelete)

	const requestOptions = {
		method: "DELETE"
	}

	fetch('https://playground.4geeks.com/contact/agendas/humberto/contacts/' + idToDelete, requestOptions)
	.then ( (data) => {
		console.log(data)
		getContactList()
	} )

  }

	return (
		<div className="mt-5">
			{/*LISTA DE CONTACTOS*/}
			<ul className="list-group">
					{/* Map over the 'todos' array from the store and render each item as a list element */}
					{store && store.contactos?.map((item) => {
					  return (
						<ContactCard key={item.id} contact={item} onDelete={deleteContact} />
					  );
					})}
			</ul>
		<br />
		</div>
	);
}; 