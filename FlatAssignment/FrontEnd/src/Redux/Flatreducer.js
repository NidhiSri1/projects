import { Add_Flat } from "./FlatAction";
import { Add_Id } from "./idAction";
export const reducer = (store, { type, payload }) => {
    switch (type) {
        case Add_Flat:
            return { ...store, flat: payload };
        case Add_Id:
            return { ...store, id: (store.id = payload) };
        default:
            return store;
    }
};
