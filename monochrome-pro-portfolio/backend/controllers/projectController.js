const Project = require('../models/Project');

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects };
