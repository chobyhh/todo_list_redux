import { createStore, combineReducers } from "redux";
import todo from "./modules/todo";

//만약에 다른 모듈이 추가된다면?
// const rootReducer = combineReducers({todo, todo2, todo3}); 
// 위 내용 처럼 임포트한 모듈 다 넣어주면 됨
const rootReducer = combineReducers({todo});

const store = createStore(rootReducer);

export default store;

