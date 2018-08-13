/**
 * @param  {key}
 * @return {require('../assets/${key}')}
 */
export const imageChooser = key => {
  switch (key) {
    case "dumbbell":
      return require("./assets/dumbbell.png");
    case "barbell":
      return require("./assets/barbell.png");
    default:
      return require("./assets/default.png");
  }
};
