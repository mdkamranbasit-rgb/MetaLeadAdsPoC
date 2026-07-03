require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Meta Lead Ads Backend is running 🚀");
});

let latestLead = null;

// ==========================
// Webhook Verification
// ==========================
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode === "subscribe" &&
    token === process.env.VERIFY_TOKEN
  ) {
    console.log("Webhook Verified ✅");
    return res.status(200).send(challenge);
  }
  console.log("Webhook Verification Failed ❌");
console.log({
  mode,
  token,
  expected: process.env.VERIFY_TOKEN,
});

  res.sendStatus(403);
});

// ==========================
// Receive Lead Events
// ==========================
app.post("/webhook", (req, res) => {
  console.log("\n🔥🔥🔥 WEBHOOK POST RECEIVED 🔥🔥🔥");
  console.log(JSON.stringify(req.body, null, 2));

  latestLead = req.body;

  res.sendStatus(200);
});

// ==========================
// Simulate Lead (Postman)
// ==========================
app.post("/simulate-lead", (req, res) => {
  latestLead = req.body;

  console.log("\n✅ Simulated Lead Received");
  console.log(latestLead);

  res.json({
    success: true,
    message: "Lead stored successfully"
  });
});

// ==========================
// Get Latest Lead
// ==========================
app.get("/latest-lead", (req, res) => {
  res.json(latestLead);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("VERIFY_TOKEN =", process.env.VERIFY_TOKEN);
});