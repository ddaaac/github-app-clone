import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  issue: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: 'rgb(48,209,88)',
  },
  gitPullRequest: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: 'rgb(10,132,255)',
  },
  repository: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: 'rgb(191,90,241)',
  },
  organization: {
    lineHeight: 32,
    textAlign: 'center',
    backgroundColor: 'rgb(255,159,10)',
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

