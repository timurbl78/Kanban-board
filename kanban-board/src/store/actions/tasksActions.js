import { ACTIONS } from './index';

export const addTask = (title) => {
  return {
    type: ACTIONS.ADD_TASK,
    payload: title,
  };
};

export const updateTask = (groupId, updatedTask) => {
  return {
    type: ACTIONS.UPDATE_TASK,
    payload: {
      groupId,
      task: updatedTask,
    }
  };
};
