import { Class, IssueSetting, IssueStatus, IssueType, Project, Subject } from "../model/IndexModel.js";

const createNewIssueSetting = async (data) => {
  try {
    const newIssueSetting = await IssueSetting.create(data);
    return newIssueSetting;
  } catch (error) {
    console.log(
      "🚀 ~ file: issueSettingRepository.js:5 ~ createNewIssueSetting ~ error:",
      error
    );
  }
};
const getAllIssueSettings = async (sortColumn, sortDirection) => {
  try {
    const issueSettings = await IssueSetting.findAll({
      include: [
        {
          model: Class,
          as: "Class",
          attributes: ["class_id", "class_name"],
        },
        {
          model: Project,
          as: "Project",
          attributes: ["project_id", "project_name"],
        },
        {
          model: Subject,
          as: "Subject",
          attributes: ["subject_id", "subject_code", "subject_name"],
        },
      ],
      order: [[sortColumn, sortDirection]],
    });
    return issueSettings;
  } catch (error) {
    console.log("Error:", error);
  }
};
const getIssueSettingById = async (id) => {
  try {
    const issueSetting = await IssueSetting.findByPk(id, {
      include: [
        {
          model: Class,
          as: "Class",
          attributes: ["class_id", "class_name"],
        },
        {
          model: Project,
          as: "Project",
          attributes: ["project_id", "project_name"],
        },
        {
          model: Subject,
          as: "Subject",
          attributes: ["subject_id", "subject_code", "subject_name"],
        },
      ],
    });
    return issueSetting;
  } catch (error) {
    console.log("Error:", error);
  }
};
const updateIssueSetting = async (id, newData) => {
  try {
    const updatedIssueSetting = await IssueSetting.update(newData, {
      where: { setting_id: id },
    });
    return updatedIssueSetting;
  } catch (error) {
    console.log("Error:", error);
  }
};
const changeStatusIssueSetting = async (id) => {
  try {
    const issueSetting = await IssueSetting.findByPk(id);

    if (issueSetting) {
      const updatedIssueSetting = await issueSetting.update({
        is_actived: !issueSetting.is_actived,
      });

      return updatedIssueSetting;
    } else {
      console.log("Issue setting not found");
      return null;
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
const getAllTypeAndStatusBySettingId = async(setting_id) => {
  try {
    const statuses = await IssueStatus.findAll({
      where: { setting_id: setting_id },
    });
    const types = await IssueType.findAll({
      where: { setting_id: setting_id },
    });

    return { statuses, types };
  } catch (error) {
    console.log("🚀 ~ file: issueSettingRepository.js:106 ~ getAllTypeAndStatusBySettingId ~ error:", error)
    
  }
}
const addNewTypeAndStatusBySettingId = async (typeData,statusData)=>{
  try {
    let type,status;
    if(typeData) {
       type = await IssueType.create(typeData);
    }
    if(statusData) {
       status = await IssueStatus.create(statusData);
    }
    return {status, type}
  } catch (error) {
    console.log("🚀 ~ file: issueSettingRepository.js:114 ~ addNewTypeAndStatusBySettingId ~ error:", error)
  }
}
const deleteTypeAndStatusBySettingId = async (type_id,status_id)=>{
  try {
    let type,status;
    if(type_id) {
       type = await IssueType.destroy(type_id);
    }
    if(status_id) {
       status = await IssueStatus.destroy(status_id);
    }
    return {status, type}
  } catch (error) {
    console.log("🚀 ~ file: issueSettingRepository.js:114 ~ addNewTypeAndStatusBySettingId ~ error:", error)
  }
}
export default {
  createNewIssueSetting,
  changeStatusIssueSetting,
  getAllIssueSettings,
  getIssueSettingById,
  updateIssueSetting,
  getAllTypeAndStatusBySettingId,
  addNewTypeAndStatusBySettingId,
  deleteTypeAndStatusBySettingId
};
