import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = ({ contacts, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((c) => c.id === parseInt(id, 10));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setAddress(contact.address);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact) {
      onSave({ ...contact, name, email, phone, address });
      navigate("/");
    }
  };

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="form-container">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditContact;
