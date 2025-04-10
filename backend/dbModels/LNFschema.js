import mongoose from "mongoose";
import { type } from "os";

const lostSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    description: String,

    location: String,

    status: {
        type: String,
        enum: ['pending', 'approved','rejected','resolved'],
        default: 'pending'
    }
});
const LostTicket=mongoose.model('LostTicket', lostSchema);

const foundSchema=new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    description: String,

    location: String
})
const FoundItem=mongoose.model('FoundItem', foundSchema);

export {FoundItem, LostTicket};