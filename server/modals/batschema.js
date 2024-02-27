const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');

// Define Address Schema
const batterySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    vehicle_make: {
        type: String,
        required: true
    },
    vehicle_model: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

});

batterySchema.methods.generateToken = async function () {
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
const Battery = mongoose.model('Battery', batterySchema);

module.exports = Battery;
