import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileImage = () => (
  <TouchableOpacity style={styles.imgButton}>
    <Image
      style={styles.imgContainer}
      source={{ uri: 'https://2.bp.blogspot.com/-dOmo4hFIwsA/W7h-5oaz57I/AAAAAAAAlJw/wggMaKtAAZslpQVxUoYffutDkeIeu4M2wCLcBGAs/s1600/1.gif' }}
    />
  </TouchableOpacity>
);

export default ProfileImage;

const profileSize = 35;

const styles = StyleSheet.create({
  imgButton: {
    marginLeft: 15,
    width: profileSize,
    height: profileSize,
    borderRadius: 40,
    overflow: 'hidden',
  },
  imgContainer: {
    width: profileSize,
    height: profileSize,
  },
});
