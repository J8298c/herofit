import React from "react";
import { Image } from "react-native";

const ImageContainer = props => {
  const type = props;
  const styles = {
    mainImage: {
      height: 170,
      width: 170,
      resizeMode: "cover"
    }
  };
  return (
    <Image
      source={props.imageSource}
      style={props.type ? styles[type] : styles.mainImage}
    />
  );
};

export default ImageContainer;
