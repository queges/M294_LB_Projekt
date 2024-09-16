import { useState } from "react";

function ContactForm({ onSubmit, contact }) {
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [address, setAddress] = useState(contact ? contact.address : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Save Contact</button>
    </form>
  );
}

export default ContactForm;
