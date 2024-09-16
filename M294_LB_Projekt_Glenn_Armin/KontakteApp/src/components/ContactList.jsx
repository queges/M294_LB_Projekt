import React from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div>
                <strong>{contact.name}</strong> ({contact.email},{" "}
                {contact.phone}, {contact.address})
              </div>
              <div>
                <Link to={`/edit/${contact.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
