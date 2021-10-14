const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const peoplerSchema = mongoose.Schema(
  {
    PName: {
      type: String,
      required: true,
      trim: true,
    },
    Sex: {
      type: Boolean,
      required: true,
      trim: true,
    },
    DOB: {
      type: Date,
      required: true,
      trim: true,
    },
    Phone: {
      type: String,
      required: true,
      trim: true,
    },
    Address: {
      type: String,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
peoplerSchema.plugin(toJSON);
peoplerSchema.plugin(paginate);



/**
 * @typedef People
 */
const People = mongoose.model('People', peoplerSchema);

module.exports = People;
