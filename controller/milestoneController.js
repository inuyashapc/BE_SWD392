import { milestoneRepository } from "../repository/indexRepository.js";

const getAllMilestone = async (req, res) => {
  try {
    const result = await milestoneRepository.getAllMilestone();
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};

const getDetailMilestone = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await milestoneRepository.getDetailMilestone(id);
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};

const createMilestone = async (req, res) => {
  const {
    project_id,
    class_id,
    milestone_name,
    milestone_type,
    milestone_status,
    milestone_description,
    start_date,
    end_date,
  } = req.body;
  try {
    const result = await milestoneRepository.createMilestone({
      project_id,
      class_id,
      milestone_name,
      milestone_type,
      milestone_status,
      milestone_description,
      start_date,
      end_date,
    });
    res.json(result);
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

const getAllMilestoneByProject = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= id:", id);
  try {
    const result = await milestoneRepository.getAllMilestoneByProject(id);
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};
export default {
  getAllMilestone,
  getDetailMilestone,
  createMilestone,
  getAllMilestoneByProject,
};
