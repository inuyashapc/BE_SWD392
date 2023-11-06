import { issueSettingRepository } from "../repository/IndexRepository.js";

const createNewIssueSetting = async (req, res) => {
  try {
    const {
      project_id,
      class_id,
      subject_id,
      work_process = 0,
      gitlab_sync = "",
      is_actived = 1
    } = req.body;
    const newSubject = await issueSettingRepository.createNewIssueSetting({
      project_id,
      class_id,
      subject_id,
      work_process,
      gitlab_sync,
      is_actived
    });
    res.json(newSubject);
  } catch (error) {
    res.json("not found");
  }
};
const getAllIssueSettings = async (req, res) => {
  try {
    const {sortColumn, sortDirection} = req.query;
    console.log("🚀 ~ file: issueSettingController.js:29 ~ getAllIssueSettings ~ sortColumn, sortDirection:", sortColumn, sortDirection)
    const issueSettings = await issueSettingRepository.getAllIssueSettings(sortColumn, sortDirection);
    res.json(issueSettings);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
const getIssueSettingById = async (req, res) => {
  const id = req.params.id;
  try {
    const issueSetting = await issueSettingRepository.getIssueSettingById(id);
    if (issueSetting) {
      res.json(issueSetting);
    } else {
      res.status(404).json("Issue setting not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
const updateIssueSetting = async (req, res) => {
  const id = req.params.id;
  const newData = req.body; 
  console.log("🚀 ~ file: issueSettingController.js:52 ~ updateIssueSetting ~ newData:", newData)
  
  try {
    const updatedIssueSetting = await issueSettingRepository.updateIssueSetting(
      id,
      newData
    );
    if (updatedIssueSetting) {
      res.json(updatedIssueSetting);
    } else {
      res.status(404).json("Issue setting not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
const changeStatusIssueSetting = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedIssueSetting =
      await issueSettingRepository.changeStatusIssueSetting(id);
    if (updatedIssueSetting) {
      res.json(updatedIssueSetting);
    } else {
      res.status(404).json("Issue setting not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
const getAllTypeAndStatusBySettingId = async (req, res) => {
  const id = req.params.id;
  try {
    const statusAndType =
      await issueSettingRepository.getAllTypeAndStatusBySettingId(id);
    if (statusAndType) {
      res.json(statusAndType);
    } else {
      res.status(404).json("Issue setting not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
const addNewTypeAndStatusBySettingId = async (req, res) => {
  try {
  const {typeData,statusData} = req.body;
    const statusAndType =
      await issueSettingRepository.addNewTypeAndStatusBySettingId(typeData,statusData);
    if (statusAndType) {
      res.json(statusAndType);
    } else {
      res.status(404).json("Issue setting not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
const deleteTypeAndStatusBySettingId = async (req, res) => {
  try {
  const {type_id,status_id} = req.query;
    const statusAndType =
      await issueSettingRepository.deleteTypeAndStatusBySettingId(type_id,status_id);
    if (statusAndType) {
      res.json(statusAndType);
    } else {
      res.status(404).json("Issue setting not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
export default {
  createNewIssueSetting,
  changeStatusIssueSetting,
  updateIssueSetting,
  getAllIssueSettings,
  getIssueSettingById,
  getAllTypeAndStatusBySettingId,
  addNewTypeAndStatusBySettingId,
  deleteTypeAndStatusBySettingId
};
