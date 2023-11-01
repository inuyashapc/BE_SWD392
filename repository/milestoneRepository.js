import { Class, Milestone, Project } from "../model/indexModel.js";

const getAllMilestone = async () => {
  try {
    const result = await Milestone.findAll({
      include: [
        {
          model: Project,
          as: "Project",
          attributes: ["project_id", "project_name"],
        },
        {
          model: Class,
          as: "Class",
          attributes: ["class_id", "class_name"],
        },
      ],
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDetailMilestone = async (id) => {
  try {
    const result = await Milestone.findOne({
      milestone_id: id,
      include: [
        {
          model: Project,
          as: "Project",
          attributes: ["project_id", "project_name"],
        },
        {
          model: Class,
          as: "Class",
          attributes: ["class_id", "class_name"],
        },
      ],
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
const createMilestone = async ({
  project_id,
  class_id,
  team_leader_id,
  project_name,
  Project_description,
}) => {
  try {
    const result = await Milestone.create({
      project_id,
      class_id,
      team_leader_id,
      project_name,
      Project_description,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getAllMilestone,
  getDetailMilestone,
  createMilestone,
};
