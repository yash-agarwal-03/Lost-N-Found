import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import LNFrouter from "./controllers/LNFrouter.js";

// Connect to MongoDB
async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/lostAndFound");
        console.log("Connected to MongoDB");

    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
    }
}

connectDB();

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    console.log("Welcome to TIET Nexus");
});

app.use('/lnf',LNFrouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});