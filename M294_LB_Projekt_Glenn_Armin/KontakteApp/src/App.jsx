import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import ContactList from "/src/components/ContactList";
import AddContact from "/src/components/AddContact";
import EditContact from "/src/components/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Broadway",
    },
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
  };

  const handleEditContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
          }
        />
        <Route path="/add" element={<AddContact onAdd={handleAddContact} />} />
        <Route
          path="/edit/:id"
          element={
            <EditContact contacts={contacts} onSave={handleEditContact} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
