import { createStore } from "react";
import reducer from "./userreducer";

const store = createStore(reducer);
// console.log("from store login", store);

export default store;