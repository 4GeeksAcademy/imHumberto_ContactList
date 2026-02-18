import { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  function createContact() {
    console.log("create contact")

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": name,
        "address": address,
        "phone": phone,
        "email": email
      })
    }

    fetch ('https://playground.4geeks.com/contact/agendas/humberto/contacts', requestOptions)
    .then ((response) => response.json() )
    .then ( (data) => console.log(data) )

  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card m-5 col-4">
        <div className="card-body">

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" placeholder="Full name" value={name} onChange={(e) => {
              setName(e.target.value)
              console.log(e.target.value)
              }} />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input className="form-control" type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input className="form-control" type="text" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          
          <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={createContact}>Save</button>
            <Link to="/" className="btn">
                Return to home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact