import React from "react";

const ContactCard = ({ contact, onDelete }) => {
    return (
        <li className="list-group-item d-flex gap-3 mx-5">
            <div>
                <img className="rounded-circle" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width: '100px'}}/> 
            </div>
            <div className="flex-grow-1">
                <p className="fs-3 mb-2"> {contact.name}</p>
                <p className="mb-1 text-secondary"><i className="bi bi-geo-alt-fill"></i> {contact.address}</p>
                <p className="mb-1 text-secondary"><i className="bi bi-telephone-fill"></i> {contact.phone}</p>
                <p className="mb-1 text-secondary"><i className="bi bi-envelope-fill"></i> {contact.email}</p>
            </div>
            <button className="btn p-0" onClick={() => onDelete(contact.id)}><i className="bi bi-trash-fill"></i></button>
            <button className="btn p-0"><i className="bi bi-pen-fill"></i></button>
        </li>
    )
}

export default ContactCard