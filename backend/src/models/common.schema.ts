import mongoose from "mongoose";

export const VerificationDetailsSchema =new mongoose.Schema({
    status: {
        type: Boolean,
        default: false, 
    },
}, {
    timestamps: true  
});