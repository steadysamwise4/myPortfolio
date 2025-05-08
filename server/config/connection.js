require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
  })
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
