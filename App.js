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
import { Checklist } from './app/views/Checklist';
import { BottomNavigation, Text } from 'react-native-paper';


// const MyRoutes = createStackNavigator(
//   {
//     HomeRT: {
//       screen: Home
//     },
//     ContactRT: {
//       screen: Contact
//     },
//     VideoClipsRT: {
//       screen: VideoClips
//     },
//     VideoDetailRT: {
//       screen: VideoDetail
//     },
//     RegisterRT: {
//       screen: Register
//     },
//     LoginRT: {
//       screen: Login
//     },
//     BlogRT: {
//       screen: Blog
//     },
//     BlogDetailRT: {
//       screen: BlogDetail
//     },
//     AboutRT: {
//       screen: About
//     },
//     ChecklistRT: {
//       screen: Checklist
//     }

//   },
//   { initialRouteName: 'HomeRT' }
// );
// const AppContainer = createAppContainer(MyRoutes);

// export default AppContainer;

const HomeRT = () => <Text>Home</Text>;

const ContactRT = () => <Text>Contact</Text>;

const BlogRT = () => <Text>Blog</Text>;

const MoreRT = () => <Text>About</Text>

export default class FooterMenu extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'contact', title: 'Contact', icon: 'message' },
      { key: 'blog', title: 'Blog', icon: 'public' },
      { key: 'more', tite: 'MoreOptions', icon: 'menu'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRT,
    contact: ContactRT,
    blog: BlogRT,
    more: MoreRT,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}