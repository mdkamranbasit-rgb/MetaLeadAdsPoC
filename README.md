# Meta Lead Ads + React Native PoC

A Proof of Concept demonstrating real-time lead updates from a backend service to a React Native application.

## Overview

This project demonstrates an end-to-end lead ingestion flow where a backend receives lead data and the React Native application automatically updates the UI without requiring any user interaction.

The project consists of:

- Node.js + Express backend
- React Native (Expo) frontend
- Automatic polling for live lead updates
- Simulated lead submissions for testing

---

## Project Structure

```
MetaLeadAdsPoC/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── mobile/
    ├── app/
    ├── components/
    ├── assets/
    └── package.json
```

---

## Tech Stack

### Backend
- Node.js
- Express.js
- CORS
- dotenv

### Mobile
- React Native
- Expo
- Expo Router

---

## Features

- Webhook verification endpoint
- Lead storage on backend
- Simulated lead submission endpoint
- REST API to retrieve the latest lead
- React Native app automatically fetches the latest lead every 2 seconds
- Live UI updates without user interaction

---

## API Endpoints

### Verify Webhook

```
GET /webhook
```

---

### Receive Webhook

```
POST /webhook
```

---

### Simulate Lead

```
POST /simulate-lead
```

Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

---

### Latest Lead

```
GET /latest-lead
```

Returns the latest received lead.

---

## Running the Backend

```bash
cd backend
npm install
npm start
```

---

## Running the Mobile App

```bash
cd mobile

npm install

npx expo start
```

---

## Demo Flow

1. Start the backend.
2. Launch the React Native application.
3. Open the Leads screen.
4. Send a lead using the simulation endpoint.
5. The application automatically displays the latest lead without requiring any interaction.

---

## Current Implementation Notes

The backend includes Meta Webhook verification and webhook endpoints.

For demonstration purposes, lead submissions are simulated using the `/simulate-lead` endpoint. The React Native application consumes the backend API and updates automatically to demonstrate the complete end-to-end flow.

---

## Future Improvements

- Complete Meta Lead Ads webhook integration
- Persistent database storage
- WebSocket support for instant updates
- Authentication
- Lead history
- Push notifications

---

## Author

**Md Kamran Basit**

GitHub: https://github.com/mdkamranbasit-rgb
