const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);

const coursesScehma = new mongoose.Schema(
  {
    Cname: String,
    Ccode: String,
    Cdate: String,
    Cedate: String
  },
  {
    collection: "courses",
  }
);
module.exports = mongoose.model("courses", coursesScehma);

const adminSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "admin",
  }
);
mongoose.model("admin", adminSchema);