import { milestoneRepository } from "../repository/IndexRepository.js";

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

const updateMilestone = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= id:", id);
  const data = req.body;
  console.log("🚀 ========= data:", data);
  try {
    const result = await milestoneRepository.updateMilestone({ id, data });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const deletedMilestone = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await milestoneRepository.deleteMilestone(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
export default {
  getAllMilestone,
  getDetailMilestone,
  createMilestone,
  getAllMilestoneByProject,
  updateMilestone,
  deletedMilestone,
};
