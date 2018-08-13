import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { imageChooser } from "../helper";

const HeroPlaylist = props => {
  const { workout } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#F4F4F6",
        borderBottomWidth: 1
      }}
    >
      <View
        style={{
          height: 150,
          justifyContent: "center",
          marginLeft: 5,
          marginRight: 5
        }}
      >
        <Image
          style={{
            resizeMode: "center",
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            borderColor: "#F4F4F6"
          }}
          source={imageChooser(workout.equipment)}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          height: 150,
          marginLeft: 40,
          justifyContent: "center"
        }}
      >
        <View>
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            {workout.name.toUpperCase()}
          </Text>
        </View>
        <View>
          <TouchableHighlight>
            <Text>{workout.bodyPart}</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>{workout.equipment}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default HeroPlaylist;
