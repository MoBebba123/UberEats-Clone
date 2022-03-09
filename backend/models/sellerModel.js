const mongoose = require("mongoose");


const sellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    logo: { type: String, required: true },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: String,
        required: true

    },
    isActive: {
        type: Boolean,
        default: false
    },
    address: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: Number, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    latitude: Number,
    longitude: Number,
    rating: { type: Number, default: 0, required: true },
    numReviews: { type: Number, default: 0, required: true },
    status: {
        type: String,
        default: 'pendding',
        enum: ['pendding', 'rejected', 'approved']
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Seller", sellerSchema);  