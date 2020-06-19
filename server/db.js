const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creatorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  ytChannelURL: {
    type: String,
    required: true,
  },
});

mongoose.connect(
  "mongodb://127.0.0.1:27017/setuptourist",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully connected to the DB");
  }
);

const Creator = mongoose.model("creators", creatorSchema);

// const getConnection = () => {
//   mongoose.connect(
//     CONNECTION_URL + DB_NAME,
//     { useNewUrlParser: true },
//     (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Successfully connected to the DB");
//     }
//   );
// };

const getCreators = async () => {
  try {
    const creators = await Creator.find();
    console.log(creators);
    return creators;
  } catch (err) {
    console.log(err);
  }
};

const getCreator = async (id) => {
  try {
    const creator = await Creator.findById(id);
    console.log(creator);
    return creator;
  } catch (err) {
    console.log(err);
  }
};

const insertCreator = async (name, imgURL, ytChannelURL) => {
  try {
    const creator = new Creator({ name, imgURL, ytChannelURL });
    const createdCreator = await creator.save();
    console.log(createdCreator);
    return createdCreator;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getCreators, getCreator, insertCreator };
