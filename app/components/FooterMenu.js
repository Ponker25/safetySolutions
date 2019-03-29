import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRT = () => this.props.navigate('VideoClipsRT');

const ContactRT = () => <Text>Contact</Text>;

const BlogRT = () => <Text>Blog</Text>;

const AboutRT = () => <Text>About</Text>

export default class FooterMenu extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'contact', title: 'Contact', icon: 'contact' },
      { key: 'blog', title: 'Blog', icon: 'blog' },
      { key: 'about', title: 'About', icon: 'about'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRT,
    contact: ContactRT,
    blog: BlogRT,
    about: AboutRT,
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