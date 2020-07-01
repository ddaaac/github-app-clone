import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageWithUri = ({ uri }) => (
  <Image style={styles.imageContainer} source={{ uri }}/>
);

export default ImageWithUri;

const styles = StyleSheet.create({
  imageContainer: {
    width: 32,
    height: 32,
  },
});
