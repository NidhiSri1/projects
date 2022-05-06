import { createStore } from "redux";
import { reducer } from "./Flatreducer";
const flats = { flat: "", id: "", color: "#E8F9FD " };

export const store = createStore(reducer, flats);
