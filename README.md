# Projektdokumentation für Kontakt-Management-Anwendung

## 1. Einleitung (Grundidee des Projekts)
Die Kontakt-Management-Anwendung ist eine einfache Web-Applikation, die es Nutzern ermöglicht, Kontakte zu verwalten. Sie können neue Kontakte hinzufügen, vorhandene Kontakte bearbeiten oder löschen und die Details der Kontakte einsehen. Die Anwendung wurde mit React.js und einer REST-API zur Speicherung der Daten entwickelt. Sie zielt darauf ab, eine benutzerfreundliche Oberfläche zur Verwaltung persönlicher und geschäftlicher Kontakte bereitzustellen.

---

## 2. Anforderungsanalyse (User Stories)
Die Anforderung wurde als User Stories dokumentiert:

- **User Story 1:**
  - Als Nutzer möchte ich neue Kontakte hinzufügen können, damit ich meine persönlichen und geschäftlichen Verbindungen verwalten kann.
  - **Akzeptanzkriterien:** Ein Formular zur Eingabe von Kontaktdaten wie Name, Telefonnummer und Adresse ist vorhanden, und nach dem Speichern wird der neue Kontakt in der Liste angezeigt.

- **User Story 2:**
  - Als Nutzer möchte ich bestehende Kontakte bearbeiten können, um Änderungen in meinen Verbindungen aktuell zu halten.
  - **Akzeptanzkriterien:** Eine „Bearbeiten“-Schaltfläche ermöglicht es, die Daten eines Kontakts zu ändern und zu speichern.

- **User Story 3:**
  - Als Nutzer möchte ich Kontakte löschen können, um nicht mehr benötigte Kontakte zu entfernen.
  - **Akzeptanzkriterien:** Eine „Löschen“-Schaltfläche entfernt den ausgewählten Kontakt dauerhaft.

---

## 3. Modell-Komponenten-Diagramm

![Modell-Komponenten-Diagramm](https://draw.io)  
Das Klassendiagramm zeigt die Beziehung zwischen den Hauptkomponenten:
- **Contact:** Attribute: ID, Name, Telefonnummer, Adresse
- **ContactList:** Verwaltet eine Liste von Contact-Objekten.
- **ContactForm:** Ermöglicht das Hinzufügen und Bearbeiten von Kontakten.

---

## 4. Storyboard

Das folgende Storyboard zeigt den Ablauf der Applikation:
1. Startbildschirm zeigt die Liste der gespeicherten Kontakte.
2. Über „Neuer Kontakt“ wird das Formular zum Hinzufügen eines Kontakts geöffnet.
3. Der Nutzer kann einen bestehenden Kontakt auswählen, um ihn zu bearbeiten oder zu löschen.

---

## 5. Screen-Mockups

- **Startseite (Contact List)**: Liste aller gespeicherten Kontakte, mit Schaltflächen für Bearbeiten, Löschen und Hinzufügen neuer Kontakte.
- **Kontakt hinzufügen/bearbeiten**: Formular zur Eingabe von Namen, Telefonnummer und Adresse.

---

## 6. REST-Schnittstellen

- **GET /contacts**: Gibt alle gespeicherten Kontakte zurück.
- **POST /contacts**: Fügt einen neuen Kontakt hinzu.
- **PUT /contacts/:id**: Aktualisiert die Daten eines bestehenden Kontakts.
- **DELETE /contacts/:id**: Löscht einen Kontakt.

Datentyp für die API:
```json
{
  "id": "string",
  "name": "string",
  "phone": "string",
  "address": "string"
}
