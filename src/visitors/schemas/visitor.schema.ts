import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export const VisitorSchema = new mongoose.Schema({
    ipaddress: String,
    city: String,
    region: String,
    country: String,
    isp: String,
    ispType: String,
    referer: String,
    safePage: String,
    destination: String,
    device: String,
    userAgent: String,
    os: String,
    browser: String,
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