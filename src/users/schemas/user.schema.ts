import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
        unique:true 
    },
    email:  { 
        type: String, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        unique:true
    },
    description: String,
    hash: String,
    salt: String,
    effectiveDateFrom: Date,
    effectiveDateTo: Date,    
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastUpdatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true });