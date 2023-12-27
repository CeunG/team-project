import { combineReducers } from "redux";
import userStore from './userStore';
import boardStore from './boardStore'

const rootStore = combineReducers({
  userStore, boardStore,
})
export default rootStore;
