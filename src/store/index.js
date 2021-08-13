import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

let store = createStore(rootReducer);

export default store;
