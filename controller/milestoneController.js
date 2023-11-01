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
    team_leader_id,
    project_name,
    Project_description,
  } = req.body;
  try {
    const result = await milestoneRepository.createMilestone({
      project_id,
      class_id,
      team_leader_id,
      project_name,
      Project_description,
    });
    res.json(result);
  } catch (error) {}
};
export default { getAllMilestone, getDetailMilestone, createMilestone };
