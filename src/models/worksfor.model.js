const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const worksforrSchema = mongoose.Schema(
  {
    DayOfJoining: {
      type: String,
      required: true,
      trim: true,
    },
    Salary: {
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
worksforrSchema.plugin(toJSON);
worksforrSchema.plugin(paginate);



/**
 * @typedef Worksfor
 */
const Worksfor = mongoose.model('Worksfor', worksforrSchema);

module.exports = Worksfor;
