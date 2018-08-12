import { GET_HERO_DAILY } from "../types";
import { workoutRef } from "../firebase";

export const getHeroDaily = workouts => ({ type: GET_HERO_DAILY, workouts });

export const fetchHeroDaily = dispatch => dispatch => {
  workoutRef.on("value", snapshot => {
    console.log(snapshot.val());
  });
};
