const teamModel = require("../models/teamModel");
const userModel = require("../models/userModel");
const projectModel = require("../models/projectModel");
const taskModel = require("../models/taskModel");

//create team
const createTeam = async (req, res) => {
  const { name, members } = req.body;
  const userId = req.user.id;
  try {
    const user = await userModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const teamExists = await teamModel.findOne({ name });
    if (teamExists) {
      return res
        .status(400)
        .json({ message: "Team with this name already exists" });
    }
    const userExists = await userModel.find({ email: { $in: members } });
    if (!userExists) {
      return res.status(400).json({ message: "email not found" });
    }
    const users = await userModel.find({
      email: { $in: members },
    });

    if (users.length !== members.length) {
      return res.status(400).json({
        message: "One or more emails not found",
      });
    }

    const memberIds = users.map((user) => user._id);
    const newTeam = await teamModel.create({
      name,
      members: [userId, ...memberIds],
      owner: userId,
    });
    res
      .status(201)
      .json({ message: "Team created successfully", team: newTeam });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating team", error: err.message });
  }
};

//get all teams
const getTeams = async (req, res) => {
  const userId = req.user.id;
  try {
    const teams = await teamModel.find({ members: { $in: [userId] } }).populate("members", "name");
    res.status(200).json({ message: "Teams retrieved successfully", teams });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving teams", error: err.message });
  }
};

// get team by id
const getTeamById = async (req, res) => {
  const teamId = req.params.id;
  const userId = req.user.id;
  try {
    const team = await teamModel.findOne({
      _id: teamId,
      members: { $in: [userId] },
    });
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.status(200).json({ message: "Team retrieved successfully", team });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving team", error: err.message });
  }
};

module.exports = { createTeam, getTeams, getTeamById };
