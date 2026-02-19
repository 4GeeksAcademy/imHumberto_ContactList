import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Edit = ()=> {

    const { id } = useParams()

    const [contact, setContact] = useState ({
        name: "",
        address: "",
        phone: "",
        email: "",
    })

    function getContact () {
	
	fetch('https://playground.4geeks.com/contact/agendas/humberto/contacts')
	.then( (response) => response.json() )
	.then( (data) => { 
        const contacto = data.contacts.find ((item) => item.id == id)
        console.log(contacto)
        setContact(contacto)
    } )

  }

  function saveChanges () {
    console.log("saveChanges")

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "name": contact.name,
    "address": contact.address,
    "phone": contact.phone,
    "email": contact.email
    });

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch(`https://playground.4geeks.com/contact/agendas/humberto/contacts/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  }

  useEffect ( () => {
    console.log('Se estan trayendo los contactos')
	getContact ()
  }, [])
  


    return (
        <div className="d-flex justify-content-center">
            <div className="card m-5 col-4">
                <div className="card-body">
                    <div className="text-center mb-3">
                        <h2 className="display-6 text-secondary">Edit contact</h2>
                    </div>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" className="form-control" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} />
                    </div>

                    <div className="mb-3">
                        <label>Address</label>
                        <input type="text" className="form-control" value={contact.address} onChange={(e) => setContact({...contact, address: e.target.value})} />
                    </div>

                    <div className="mb-3">
                        <label>Phone</label>
                        <input type="text" className="form-control" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})} />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" className="form-control" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} />
                    </div>

                    <div className="d-grid gap-2">
                        <Link to="/">
                            <button className="btn btn-primary w-100" onClick={saveChanges}>Save changes</button>
                        </Link>
                        <Link to="/" className="btn">
                            Return to home
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Edit