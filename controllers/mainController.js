const helpersBackend = require("../helpersBackend");
const mongoose = require("mongoose");
const Ideas = mongoose.model("Ideas");
const Users = mongoose.model("Users");
const Comments = mongoose.model("Comments");

// find ideas when hit home route
exports.home = async (req, res) => {
  const ideas = await Ideas.find();
  sortArray(ideas);
  res.render("page1", { ideas, user: req.user });
};

// save idea to database and redirect to / (which kicks off the home method in main controller)
exports.addIdea = async (req, res) => {
  req.body.author = req.user._id;
  await new Ideas(req.body).save();
  console.log("saved");
  res.redirect("/");
};

exports.upvoteStore = async (req, res) => {
  const ideasString = req.user.voted.map(item => item.toString());
  const operator = ideasString.includes(req.params.id) ? "$pull" : "$addToSet";
  const user = await Users.findByIdAndUpdate(
    req.user._id,
    {
      [operator]: { voted: req.params.id }
    },
    { new: true }
  );
  const idea = await Ideas.findByIdAndUpdate(
    req.params.id,
    {
      [operator]: { upVotes: req.user._id }
    },
    { new: true }
  );
  res.json(idea);
};

exports.upvoteComment = async (req, res) => {
  const cString = req.user.upvotedComments.map(item => item.toString());
  const operator = cString.includes(req.params.id) ? "$pull" : "$addToSet";
  const user = await Users.findByIdAndUpdate(
    req.user._id,
    {
      [operator]: { upvotedComments: req.params.id }
    },
    { new: true }
  );
  const comment = await Comments.findByIdAndUpdate(
    req.params.id,
    {
      [operator]: { upVotes: req.user._id }
    },
    { new: true }
  );
  res.json(comment);
};

// save idea to database and redirect to / (which kicks off the home method in main controller)
exports.showIdea = async (req, res) => {
  // find the idea given the id
  const idea = await Ideas.findOne({ _id: req.params.id });
  res.render("specificIdea", { idea, user: req.user });
};

// post comment to db
exports.postComment = async (req, res) => {
  req.body.author = req.user._id;
  req.body.idea = req.params.id;
  await new Comments(req.body).save();
  res.redirect("back");
};
