import { ACTIONS } from '../actions/index';
import initialState from '../initialState';

let cardId = 10;

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      const newTask = {
        title: action.payload,
        status: 'backlog',
        id: `card-${cardId}`,
      };
      cardId += 1;
      const newStateA = state.map((group) => {
        if (group.className === 'backlog') {
          return {
            ...group,
            tasks: [
              newTask,
              ...group.tasks,
            ]
          }
        }
        return group;
      });
      return newStateA;

    case ACTIONS.UPDATE_TASK:
      const updatedTask = action.payload.task;

      const newStateU = state.map((group) => {
        if (group.id === action.payload.groupId) {
          const newTasks = group.tasks.map((task) => {
            if (task.id === action.payload.task.id) {
              return updatedTask;
            }
            return task;
          });

          return {
            ...group,
            tasks: newTasks,
          }
        }
        return group;
      });
      return newStateU;

    case ACTIONS.CLEAR_GROUP:
      const newStateC = state.map((group) => {
        if (group.id === action.payload) {
          return {
            ...group,
            tasks: [],
          }
        }
        return group;
      });
      return newStateC;

    default:
      return state;
  }
};

export default groupsReducer;
