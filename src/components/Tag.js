import React from "react";
import { TouchableHighlight, Text } from "react-native";

const Tag = props => (
  <TouchableHighlight
    style={{
      borderRadius: 5,
      backgroundColor: "#30366A",
      borderWidth: 1,
      borderColor: "#30366A",
      width: 75,
      marginBottom: 10,
      marginTop: 10
    }}
  >
    <Text style={{ textAlign: "center", color: "#EFEEF3" }}>
      {props.tagText}
    </Text>
  </TouchableHighlight>
);

export default Tag;
