import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  lawyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lawyer',
    required: true,
  },
  cnicFrontImage: {
    type: String,
    required: true,
  },
  cnicBackImage: {
    type: String,
    required: true,
  },
  professionalDocument:[ {
    type: String,
    required: true,
  },
],
  councilIdDocument:[{
    type: String,
    required: true,
  }
],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Member = mongoose.model("Member", MemberSchema);
