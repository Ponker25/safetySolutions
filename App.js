import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home } from './app/views/Home';

import { Contact } from './app/views/Contact';

import { VideoClips } from './app/views/VideoClips';
import { VideoDetail } from './app/views/VideoDetail';

import { Register } from './app/views/Register';
import { Login } from './app/views/Login';

import { Blog } from './app/views/Blog';
import { BlogDetail } from './app/views/BlogDetail';

import { About } from './app/views/About';
import {Checklist} from './app/views/Checklist';

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    },
    VideoClipsRT: {
      screen: VideoClips
    },
    VideoDetailRT: {
      screen: VideoDetail
    },
    RegisterRT: {
      screen: Register
    },
    LoginRT: {
      screen: Login
    },
    BlogRT: {
      screen: Blog
    },
    BlogDetailRT: {
      screen: BlogDetail
    },
    AboutRT: {
      screen: About
    },
    ChecklistRT: {
      screen: Checklist
    }

  },
  { initialRouteName: 'HomeRT' }
);
const AppContainer = createAppContainer(MyRoutes);

export default AppContainer;