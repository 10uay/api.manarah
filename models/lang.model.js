import mongoose from 'mongoose';

const langSchema = new mongoose.Schema(
  {
    en: {
      translation: {
        type: Map,
        of: String,
        required: true,
      },
    },
    ar: {
      translation: {
        type: Map,
        of: String,
        required: true,
      },
    },
    de: {
      translation: {
        type: Map,
        of: String,
        required: true,
      },
    },
    // Add more languages as needed
  },
  { timestamps: true }
);

const Lang = mongoose.model("Lang", langSchema);

export default Lang;
