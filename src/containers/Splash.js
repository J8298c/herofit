import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import Container from "../components/Container";
import ImageContainer from "../components/ImageContainer";

const Splash = props => (
  <Container>
    <View>
      <View style={{ marginTop: 75 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: "700",
            color: "#3949ab"
          }}
        >
          Hero Fit{" "}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 120
        }}
      >
        <ImageContainer imageSource={require("../assets/HomeImage.png")} />
      </View>
      <View style={{ marginTop: 60, alignItems: "center" }}>
        <Button
          content="Start"
          onPress={() => props.navigation.navigate("MainApp")}
        />
      </View>
    </View>
  </Container>
);

export default Splash;
