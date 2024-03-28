import { STATECOUNT } from "../constants/constants";

export const increaseCount = () => {
    return {
        type: STATECOUNT,
    }
}