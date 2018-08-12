import { GET_HERO_DAILY } from '../types';


const workoutReducer = (state = {}, action) => {
	switch(action) {
		case GET_HERO_DAILY:
			return { ...state, all_workouts: action.workouts}
		default:
			return state
	}
}