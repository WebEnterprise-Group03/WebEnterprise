const mongoose = require('mongoose');
const URL = process.env.url;

async function connect(uri, callback) {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect successfully');
  } catch (error) {
    console.log('Connect Failed', error);
  }
}

module.exports = { connect };
