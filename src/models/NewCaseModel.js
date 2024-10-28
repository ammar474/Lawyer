import mongoose from "mongoose";

const NewCaseSchema = new mongoose.Schema({
  caseType: {
    type: String,
    required: true,
  },
  caseSubCategory: {
    type: String,
    required: true,
  }, 
  party: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  caseDescription: {
    type: String,
    required: true,
  },
  hearingDate: {
    type: Date,
    required : true
  },
  caseStatus: {
    type: String,
    enum: ["open", "in-progress", "closed"],
    default: "open",
  },
  caseNumber: {
    type: Number,
    required: true,
  },
  firNumber: {
    type: Number,
    required: true,
  },
  firYear: {
    type: Number,
    required: true,
  },
  policeStation: {
    type: String,
    required: true,
  },
  offence: {
    type: String,
    required: true,
  },
  decidedBy: {
    type: String,
    required: true,
  },
  decisionDate: {
    type: Date,
    required: true,
  },
  decisionType: {
    type: String,
    required: true,
  },
  outCome: {
    type: String,
    enum: ["Acquitted", "Convicted"],
    required: false,
  },
  shortOrder: {
    type: String,
    required: false,
  },
  caseDocuments:[  {
    type: String,
    required: false,
  },
],
 lawyerId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Lawyer',
  required: true,
},

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const NewCase = mongoose.model("NewCase", NewCaseSchema);

