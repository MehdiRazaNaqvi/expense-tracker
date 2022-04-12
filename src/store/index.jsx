import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./reducer/reducer"

const store = createStore(App , applyMiddleware(thunk))

export default store;