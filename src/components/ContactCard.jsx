import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="list-group-item d-flex gap-3 mx-5">
            <div className="d-flex align-items-center">
                <img className="rounded-circle" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width: '100px', height: '100px', objectFit: 'cover'}}/> 
            </div>
            <div className="flex-grow-1">
                <p className="fs-3 mb-2"> {contact.name}</p>
                <p className="mb-1 text-secondary"><i className="bi bi-geo-alt-fill"></i> {contact.address}</p>
                <p className="mb-1 text-secondary"><i className="bi bi-telephone-fill"></i> {contact.phone}</p>
                <p className="mb-1 text-secondary"><i className="bi bi-envelope-fill"></i> {contact.email}</p>
            </div>
            <div className="d-flex align-items-start gap-3">
                <Link to={`/edit/${contact.id}`}>
                    <button className="btn p-0" onClick={ ()=> {onEdit(contact.id)} } ><i className="bi bi-pencil-fill"></i></button>
                </Link>
                <button className="btn p-0" onClick={() => onDelete(contact.id)}><i className="bi bi-trash-fill"></i></button>
            </div>
        </li>
    )
}

export default ContactCard