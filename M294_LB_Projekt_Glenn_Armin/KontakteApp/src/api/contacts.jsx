const API_URL = "https://api.example.com/contacts";

export async function getContacts() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function getContactById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}

export async function addContact(contact) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return await response.json();
}

export async function updateContact(id, contact) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return await response.json();
}

export async function deleteContact(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
