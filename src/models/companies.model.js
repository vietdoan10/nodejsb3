const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const companiesrSchema = mongoose.Schema(
  {
    Cname: {
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
companiesrSchema.plugin(toJSON);
companiesrSchema.plugin(paginate);



/**
 * @typedef Companies
 */
const Companies = mongoose.model('Companies', companiesrSchema);

module.exports = Companies;
