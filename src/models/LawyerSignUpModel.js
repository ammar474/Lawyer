import mongoose from "mongoose";

const  LawyerSignUpSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password :{
    type : String,
    required : true
  },
  phone: {
    type: String,
    reqired: true,
  },
  cnic: {
    type: Number,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: false, 
  },
  experience: {
    type: Number,
    required: false,
  },
  qualification: {
    type: String,
    required: false, 
  },
  station: {
    type: String,
    required: false, 
  },
  officeAddress: {
    type: String,
    required: false, 
  },
  areaOfExpertise: {
    type: String,
    required: false, 
  },
  caseCovered :{
     type : Number,
     required : false
  },
  city :{
    type: String,
    required : false
  },
  barCouncilId: {
    type: String,
    required: true,
    unique: true,
  },
  role :{
    type : String,
    required : true
  },
  cnicFrontImage: {
    type: String,
    required: true,
  },
  cnicBackImage: {
    type: String,
    required: true,
  },
  barCouncilImage: {
    type: String,
    required: true,
  },
  professionalDocuments: [{
    type: String,
    required: true,
  }],
  profileImage: {
    type: String,
    required: true,
  },
});
export const Lawyer = mongoose.model("Lawyer", LawyerSignUpSchema);
