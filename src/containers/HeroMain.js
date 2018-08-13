import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import Container from "../components/Container";
import { fetchHeroDaily } from "../redux/actions/workout.actions";
class HeroMain extends Component {
  componentDidMount() {
    this.props.fetchHeroDaily();
  }
  render() {
    return (
      <Container>
        <Text>HeroMain</Text>
      </Container>
    );
  }
}

const mapStateToProps = ({ workoutReducer }) => {
  const { daily_workout } = workoutReducer;
  console.log(workoutReducer, "the daily workout");
  return {
    daily_workout
  };
};

export default connect(
  mapStateToProps,
  { fetchHeroDaily }
)(HeroMain);
