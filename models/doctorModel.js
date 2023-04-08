const mongoose = require("mongoose");
const validator = require('validator');

const doctorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      // required: true,
      // unique:true
    },
    specialization: {
      type: String,
      // requires: [true, " is required"],
    },
    description: {
      type: String,
      // required: [true, "desc is required"],
    },
    availabilityDate: {
      type: Date,
      // required: [true, "data is required"],
    },
    email: {
          type: String,
          required: [true, 'type your Email Id'],
          unique: true,
          lowercase: true,
          validate: [validator.isEmail, 'Please provide valid email']
      },
      photo: String,
      password: {
          type: String,
          required: [true, 'Please provide a password'],
          minlength: 8
      },
      passwordConfirm: {
          type: String,
         // required: [true, 'Please provide a password'],
          validate:{
              validator: function(el){
                  return el === this.password; 
              },
              message: 'Passwords are not the same' 
            }
          }
  }
);

const doctorsModel = mongoose.model("doctors", doctorsSchema);
module.exports = doctorsModel;
