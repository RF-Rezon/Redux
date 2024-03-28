import { STATECOUNT } from "../constants/constants";

const initialState = { count: 0 };

export const reduser = (state = initialState, { type }) => {
    switch (type) {

        case STATECOUNT:
            return { count: state.count + 1 }

        default:
            return state
    }
}
