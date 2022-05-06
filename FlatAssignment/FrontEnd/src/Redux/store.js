import { createStore } from "redux";
import { reducer } from "./Flatreducer";
const flats = { flat: "", id: "" };

export const store = createStore(reducer, flats);
