import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';

import COLOR from './Color';

const styles = StyleSheet.create({
  issue: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: COLOR.darkGreen,
  },
  gitPullRequest: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: COLOR.darkBlue,
  },
  repository: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: COLOR.darkPurple,
  },
  organization: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: COLOR.darkOrange,
  },
});

const Icons = {
  issue: (
    <Octicons style={styles.issue} name='issue-opened' size={22} color='white'/>
  ),
  gitPullRequest: (
    <Octicons style={styles.gitPullRequest} name='git-pull-request' size={22} color='white'/>
  ),
  repository: (
    <Octicons style={styles.repository} name='repo' size={22} color='white'/>
  ),
  organization: (
    <Octicons style={styles.organization} name='organization' size={22} color='white'/>
  ),
  arrowForward: (
    <Ionicons name="ios-arrow-forward" size={18} color="gray"/>
  ),
};

export default Icons;

