import express from "express";
import { FoundItem, LostTicket } from "../dbModels/LNFschema.js";
import UpdateRouter from "./UpdateTicket.js";
const LNFrouter = express.Router();

LNFrouter.use('/updateTicket',UpdateRouter);


LNFrouter.post("/addLostTicket", async (req, res) => {
  console.log(req.body);

  try {
    const newTicket = new LostTicket(req.body);
    await newTicket.save();
    res.send(201).send("Ticket added to database");
  } catch (err) {
    console.error("Error adding ticket to database", err);
    res.send("Error in saving ticket to database");
  }
  res.send(req.body);
});

LNFrouter.post("/addFoundItem", async (req, res) => {
  let item = req.body; // Generate a unique ID for the new item
  item._id = Date.now();
  try {
    const newFoundItem = new FoundItem(item);
    await newFoundItem.save();
  } catch (err) {
    console.error("Error adding found item to database", err);
    res.status(500).send("Error in saving found item to database");
  }
  res.status(201).send("Found item added to database");
});

LNFrouter.get("/getFoundItems", async (req, res) => {
  try {
    const foundItems = await FoundItem.find({});
    res.json(foundItems);
  } catch (err) {
    console.error("Error fetching found items", err);
    res.status(500).send("Error fetching found items");
  }
});

LNFrouter.get("/getApprovedTickets", async (req, res) => {
  try {
    const lostRequests = await LostTicket.find({});
    const data = await lostRequests.filter(
      (ticket) => ticket.status === "approved"
    );
    res.json(data);
  } catch (err) {
    console.error("Error fetching LOST items", err);
    res.status(500).send("Error fetching LOST items");
  }
});
LNFrouter.get("/getPendingTickets", async (req, res) => {
  try {
    const lostRequests = await LostTicket.find({});
    const data = await lostRequests.filter(
      (ticket) => ticket.status === "pending"
    );
    res.json(data);
  } catch (err) {
    console.error("Error fetching PENDING TICKETS", err);
    res.status(500).send("Error fetching PENDING TICKETS");
  }
});
LNFrouter.get("/countPendingTickets", async (req, res) => {
  try {
    const count = await LostTicket.countDocuments({ status: "pending" });
    res.json({count});
  } catch (err) {
    console.error("Error COUNTING PENDING TICKETS", err);
    res.status(500).send("Error COUNTING PENDING TICKETS");
  }
});
export default LNFrouter;
