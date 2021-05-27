import { ACTIONS } from './index';

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
) => {
  return {
    type: ACTIONS.DRAG_HAPPEND,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
    }
  };
};
