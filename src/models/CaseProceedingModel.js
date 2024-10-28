import mongoose from "mongoose";


const CaseProceedingSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'NewCase',
    required: true,
  },
  nextHearing: {
    type: Boolean, 
    required: true,
  },
  caseConcluded: {
    type: Boolean,  
    default: true,
  },
  orderOfTheDay: {
    type: String, 
    required: false,
  },
  attachments: [
    {
      type: String, 
      required: false,
    },
  ],
  status: {
    type: String,
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});


export const CaseProceeding = mongoose.model('CaseProceeding', CaseProceedingSchema);


