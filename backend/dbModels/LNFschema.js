import mongoose from "mongoose";

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
},{versionKey:false});
const LostTicket=mongoose.model('LostTicket', lostSchema);

const foundSchema=new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    description: String,

    location: String
},{versionKey:false});
const FoundItem=mongoose.model('FoundItem', foundSchema);

export {FoundItem, LostTicket};