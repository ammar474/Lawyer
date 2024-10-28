import mongoose from 'mongoose';

const CaseTypeSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true,
    
  },
  subCategories: [
    {
      type: String,
      required: true,
    },
  ],
});

export const CaseType = mongoose.model('CaseType', CaseTypeSchema);
