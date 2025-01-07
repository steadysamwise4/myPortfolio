require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
  })
  .then((result) => {
    console.log(process.env.MONGODB_URI);
    console.log(result);
  })
  .catch((err) => {
    console.log(process.env.MONGODB_URI);
    console.log(err);
  });

module.exports = mongoose.connection;
