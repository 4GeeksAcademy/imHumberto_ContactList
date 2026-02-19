import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete, onEdit }) => {
    
    return (
        <li className="list-group-item d-flex gap-3 mx-5">

            {/* MODAL */}
            <div className="modal fade" id={`confirmDelete-${contact.id}`} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow" style={{borderRadius: '16px'}}>
                        <div className="modal-body text-center p-5">
                            <h5 className="fw-bold mb-4">You sure you want to delete <span className="text-primary">{contact.name}</span> contact?</h5>
                            <img src="https://miro.medium.com/0*ZjYSm_q36J4KChdn" style={{width: '400px'}}/>
                            <p className="text-secondary mb-4">This action cannot be undone.</p>

                            <div className="d-flex gap-2 justify-content-center">
                                <button type="button" className="btn btn-light px-4" data-bs-dismiss="modal">Ups! Cancel</button>
                                <button type="button" className="btn btn-danger px-4" data-bs-dismiss="modal" onClick={() => onDelete(contact.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                <button className="btn p-0" data-bs-toggle="modal" data-bs-target={`#confirmDelete-${contact.id}`}><i className="bi bi-trash-fill"></i></button>
            </div>
        </li>
    )
}

export default ContactCard