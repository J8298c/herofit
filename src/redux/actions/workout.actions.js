import { GET_HERO_DAILY } from "../types";
import { workoutRef } from "../firebase";
import { AsyncStorage } from "react-native";

export const getHeroDaily = workouts => {
  return {
    type: GET_HERO_DAILY,
    workouts
  };
};

export const fetchHeroDaily = dispatch => dispatch => {
  workoutRef.on("value", snapshot => {
    let day;
    AsyncStorage.getItem("day")
      .then(res => {
        day = res !== 1 ? (day = 1) : (day = 2);
        let dailyworkout = snapshot
          .val()
          .filter(workout => workout.day === day || workout.day === "any");
        return dispatch(getHeroDaily(dailyworkout));
      })
      .catch(err => {
        console.log(err);
      });
  });
};
