const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const professionalrSchema = mongoose.Schema(
  {
    Degree: {
      type: String,
      required: true,
      trim: true,
    },
    Experienci: {
      type: Number,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
professionalrSchema.plugin(toJSON);
professionalrSchema.plugin(paginate);



/**
 * @typedef Professional
 */
const Professional = mongoose.model('Professional', professionalrSchema);

module.exports = Professional;
