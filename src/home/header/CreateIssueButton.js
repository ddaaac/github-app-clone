import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CreateIssueButton = () => (
  <TouchableOpacity style={styles.imgButton}>
    <AntDesign name="pluscircleo" size={20} color='#24a0ed'/>
  </TouchableOpacity>
);

export default CreateIssueButton;

const styles = StyleSheet.create({
  imgButton: {
    marginRight: 15,
  },
});
