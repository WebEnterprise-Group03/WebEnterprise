const mongoose = require('mongoose');

async function connect(uri, callback) {
  try {
    await mongoose.connect(
      'mongodb+srv://tuhuu7165:0388112130@cluster0.dz9ol.mongodb.net/WebEnterprise?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('Connect successfully');
  } catch (error) {
    console.log('Connect Failed', error);
  }
}

module.exports = { connect };
