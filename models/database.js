const mongoose = require('mongoose');

exports.connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
  }
};
