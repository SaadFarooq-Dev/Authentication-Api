// const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;

// exports.connect = () => {
//   // Connecting to the database
//   mongoose
//     .connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     })
//     .then(() => {
//       console.log("Successfully connected to database");
//     })
//     .catch((error) => {
//       console.log("database connection failed. exiting now...");
//       console.error(error);
//       process.exit(1);
//     });
// };


const mongoose = require('mongoose');
const { mongoURI } = process.env

mongoose.set('strictQuery', false);
const connectDB = async () => {
 try {
  await mongoose.connect(mongoURI);
  console.log('Monogdb Connected....');
 } catch (error) {
  console.log(error.message);

  //Exit process if connection failed
  process.exit(1);
 }
};

module.exports = connectDB;
