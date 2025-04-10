import express from "express";
import {FoundItem, LostTicket} from "../dbModels/LNFschema.js";

const LNFrouter=express.Router();

LNFrouter.post('/addLostTicket', async (req, res) => {
    console.log(req.body);

    try{
        const newTicket=new LostTicket(req.body)
        await newTicket.save();
        res.send(201).send("Ticket added to database");
    }
    catch(err){
        console.error("Error adding ticket to database", err);
        res.send("Error in saving ticket to database");
    }
    res.send(req.body);
});

LNFrouter.post('/addFoundItem', async(req, res) => {
    let item=req.body// Generate a unique ID for the new item
    item._id=Date.now();
    const newFoundItem = new FoundItem(item);
    await newFoundItem.save();
    res.status(201).send("Found item added to database");
});

LNFrouter.get('/getFoundItems',async (req,res)=>{
    try{const foundItems=await FoundItem.find({});    
    res.json(foundItems);}
    catch(err)
    {console.error("Error fetching found items", err);
    res.status(500).send("Error fetching found items");}
});

LNFrouter.get('/getLostTickets',async (req,res)=>{
    try{const lostRequests=await LostTicket.find({});    
    res.json(lostRequests);}
    catch(err)
    {console.error("Error fetching found items", err);
    res.status(500).send("Error fetching found items");}
});
export default LNFrouter;