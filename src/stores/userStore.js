// import axios from "axios";

const USER_LOGIN = 'USER_LOGIN';

// Action
export const loginAction = (data) => ({ type: USER_LOGIN, payload: data });

/*
// redux-thunk 방식
export const loginAction = (data) => async (dispatch) => {
  const resp = await axios.post('http://localhost:8000/users/login', data);
  dispatch({ type: USER_LOGIN, payload: resp.data.data })
}
*/

const init = {
  id: '',
  name: '',
  email: ''
}
const userStore = (state = init, action) => {
  switch (action.type) {
    case USER_LOGIN:
      // console.log(action.payload);
      return { ...state, id: action.payload.id, name: action.payload.name, email: action.payload.email }
    default:
      return state;
  }
}
export default userStore;
