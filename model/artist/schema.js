const mongoose = require('mongoose');

const schemaDefinition = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    is_famous: {
         type: String,
         required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});
const schemaOptions = {
  autoIndex: false,
  // by default mongoose buffer commands 
  bufferCommands: false,
  // we are making strict as false so that we can enter other keys.
  strict: false,
  //by default updates this fields on create and update
  timestamps: {
    createdAt: 'create_date',
    updatedAt: 'update_date',
  },
};

const schema = new mongoose.Schema(schemaDefinition, schemaOptions);
module.exports = schema;