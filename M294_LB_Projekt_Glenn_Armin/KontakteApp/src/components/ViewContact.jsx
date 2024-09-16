// src/components/ViewContact.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewContact() {
  const { id } = useParams();
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch contact details by ID
    setContact({ name: "John Doe", email: "john.doe@example.com" });
  }, [id]);

  return (
    <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>{" "}
      {/* Go back to the previous page */}
    </div>
  );
}

export default ViewContact;
