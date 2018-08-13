import { GET_HERO_DAILY } from "../types";

const workoutReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HERO_DAILY:
      return { ...state, daily_workout: action.workouts };
    default:
      return state;
  }
};

export default workoutReducer;
