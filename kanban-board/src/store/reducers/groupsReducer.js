import { ACTIONS } from '../actions/index';
import initialState from '../initialState';

let cardId = 10;

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      const newTask = {
        title: action.payload,
        status: 'backlog',
        id: `card-${cardId}`,
      };
      cardId += 1;
      const newState = state.map((group) => {
        if (group.className === 'backlog') {
          return {
            ...group,
            tasks: [
              ...group.tasks,
              newTask,
            ]
          }
        }
        return group;
      });
      return newState;
    }

    case ACTIONS.UPDATE_TASK: {
      const updatedTask = action.payload.task;

      const newState = state.map((group) => {
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
      return newState;
    }

    case ACTIONS.CLEAR_GROUP: {
      const newState = state.map((group) => {
        if (group.id === action.payload) {
          return {
            ...group,
            tasks: [],
          }
        }
        return group;
      });
      return newState;
    }

    case ACTIONS.DRAG_HAPPEND: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;
      const newState = [...state];

      if (droppableIdStart === droppableIdEnd) {
        const group = state.find(group => droppableIdStart === group.id);
        const task = group.tasks.splice(droppableIndexStart, 1);
        group.tasks.splice(droppableIndexEnd, 0, ...task);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const groupStart = state.find(group => droppableIdStart === group.id);
        const task = groupStart.tasks.splice(droppableIndexStart, 1);

        const groupEnd = state.find(group => droppableIdEnd === group.id);
        task[0].status = groupEnd.className;
        groupEnd.tasks.splice(droppableIndexEnd, 0, ...task);
      }

      return newState;
    }

    default:
      return state;
  }
};

export default groupsReducer;
