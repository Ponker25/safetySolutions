import React, { Fragment } from 'react';
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
import { BottomNavigation, Appbar } from 'react-native-paper';


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

const HomeRT = () => <Home /> ;

const ContactRT = () => <Contact />;

const BlogRT = () => <Blog />;

const MoreRT = () => <About />;

const ChecklistRT = () => <Checklist />;

export default class FooterMenu extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'contact', title: 'Contact', icon: 'message' },
      { key: 'blog', title: 'Blog', icon: 'public' },
      { key: 'checklist', title: 'Checklist', icon: 'done'},
      { key: 'more', title: 'More', icon: 'menu'}
    ],
  };

  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRT,
    contact: ContactRT,
    blog: BlogRT,
    checklist: ChecklistRT,
    more: MoreRT,
  });

  render() {
    return (
      <Fragment>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <Appbar.Content
            title="Safety Solutions"
            subtitle="Safety is our goal!"
          />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>
        <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        />
    </Fragment>
    );
  }
}