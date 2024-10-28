import mongoose from "mongoose";

const EditProfileSchema = new mongoose.Schema({
  designation: {
    type: String,
    required: true, 
  },
  experience: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true, 
  },
  station: {
    type: String,
    required: true, 
  },
  officeAddress: {
    type: String,
    required: true, 
  },
  areaOfExpertise: {
    type: String,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});


export const Profile = mongoose.model('Profile', EditProfileSchema);