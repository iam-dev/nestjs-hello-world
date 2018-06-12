import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export const IpAddressSchema = new mongoose.Schema({
    ipaddress: String,
    city: String,
    region: String,
    country: String,
    isp: String,
    ispType: String,
    organization: String,
    latitude: String,
    longitude: String,  
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastUpdatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true });