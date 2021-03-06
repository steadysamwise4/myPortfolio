const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
  {
    contactName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Must match an email address!']
    },
    message: {
      type: String,
      required: true,
    },
    
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Contact = model('Contact', contactSchema);

module.exports = Contact;