const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');

// Define Address Schema
const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    }
});

addressSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SELECT_KEY,
        {
            expiresIn:"30d",
        }
        )
    } catch (error) {
        console.log(error);
    }

};

// Create Address model
const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
