import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, ScrollView } from "react-native";
import Container from "../components/Container";
import { fetchHeroDaily } from "../redux/actions/workout.actions";
import HeroPlaylist from "../components/HeroPlaylist";
class HeroMain extends Component {
  componentDidMount() {
    this.props.fetchHeroDaily();
  }
  render() {
    return (
      <Container>
        <ScrollView style={{ marginTop: 100 }}>
          {this.props.daily_workout && this.props.daily_workout.length
            ? this.props.daily_workout.map((workout, i) => (
                <HeroPlaylist workout={workout} key={i} />
              ))
            : null}
        </ScrollView>
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
