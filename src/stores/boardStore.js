const BOARD_BOARD_DETAIL = 'BOARD_BOARD_DETAIL';
const BOARD_CHANGE_DATA = 'BOARD_CHANGE_DATA';
const BOARD_CLEAR_DATA = 'BOARD_CLEAR_DATA';

// Action
export const getBoardAction = (data) => ({ type: BOARD_BOARD_DETAIL, payload: data });
export const changeData = (evt) => ({ type: BOARD_CHANGE_DATA, payload: evt.target });
export const clearData = () => ({ type: BOARD_CLEAR_DATA });

const init = {
  board: { id: '', name: '', email: '', title: '', content: '', viewCnt: '', createdAt: '', }
}

const boardStore = (state = init, action) => {
  switch (action.type) {
    case BOARD_BOARD_DETAIL:
      return { ...state, board: action.payload };
    case BOARD_CHANGE_DATA:
      return { ...state, board: { ...state.board, [action.payload.name]: action.payload.value } };
    case BOARD_CLEAR_DATA:
      return { ...state, board: { id: '', name: '', email: '', title: '', content: '', viewCnt: '', createdAt: '', } }
    default:
      return state;
  }
}
export default boardStore;
