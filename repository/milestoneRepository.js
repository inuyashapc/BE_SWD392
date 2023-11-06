import { Class, Milestone, Project } from "../model/IndexModel.js";

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
      where: {
        milestone_id: id,
      },
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
  milestone_name,
  milestone_type,
  milestone_status,
  milestone_description,
  start_date,
  end_date,
}) => {
  try {
    const result = await Milestone.create({
      project_id,
      class_id,
      milestone_name,
      milestone_type,
      milestone_status,
      milestone_description,
      start_date,
      end_date,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMilestoneByProject = async (id) => {
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
      where: {
        "$Class.class_id$": id, // Điều kiện để lấy ra các Milestone có class_id bằng 1
      },
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateMilestone = async ({ id, data }) => {
  console.log("🚀 ========= data1234:", data);
  try {
    const existMilestone = await Milestone.findOne({
      where: {
        milestone_id: id,
      },
    });
    console.log("🚀 ========= existMilestone:", existMilestone);
    if (!existMilestone) {
      throw new Error("Không tồn tại milestone");
    }
    const result = await existMilestone.update(data);
    console.log("🚀 ========= result1234:", result);
    return result;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const closeMilestone = async () => {
  try {
    const milestone = Milestone.findOne();
  } catch (error) {}
};

const deleteMilestone = async (id) => {
  try {
    const deletedRows = await Milestone.destroy({
      where: {
        milestone_id: id,
      },
    });

    if (deletedRows > 0) {
      console.log("Milestone deleted successfully");
    } else {
      console.log("Milestone not found.");
    }
  } catch (error) {
    console.error("Error deleting milestone:", error);
  }
};
export default {
  getAllMilestone,
  getDetailMilestone,
  createMilestone,
  getAllMilestoneByProject,
  updateMilestone,
  deleteMilestone,
};
