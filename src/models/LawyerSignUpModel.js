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
});
export const Lawyer = mongoose.model("Lawyer", LawyerSignUpSchema);
