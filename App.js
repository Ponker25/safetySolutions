import React, { Fragment } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createStackNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon } from 'react-native-vector-icons/FontAwesome'

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
import { DefaultTheme, Provider as PaperProvider, BottomNavigation, Appbar } from 'react-native-paper';

// TODO: need to figure out the tab icons and how to add in with stack navigator. Work on the styling and adding theme. 
const MyRoutes = createMaterialBottomTabNavigator({
    Home: {screen: Home, Icon: Home},
    Contact: {screen: Contact},
    // VideoClipsRT: {screen: VideoClips},
    // VideoDetailRT: {screen: VideoDetail},
    // RegisterRT: {screen: Register},
    // LoginRT: {screen: Login},
    Blog: {screen: Blog},
    // BlogDetail: {screen: BlogDetail},
    About: {screen: About},
    Checklist: {screen: Checklist},
    // More: {screen: More}
  },
  { initialRouteName: 'Home',
    order: ['Home','Contact', 'Blog', 'Checklist', 'About'],
    tabBarOptions: {
      activeTintColor: '#D4AF37', 
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    }

}
);

const AppContainer = createAppContainer(MyRoutes);

export default AppContainer;


const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1a1e21',
    accent: '#f1c40f',
  },
};

// const HomeRT = () => <Home />;

// const ContactRT = () => <Contact />;

// const BlogRT = () => <Blog />;

// const MoreRT = () => <About />;

// const ChecklistRT = () => <Checklist />;

// export default class AlwaysVisible extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'home', title: 'Home', icon: 'home' },
//       { key: 'contact', title: 'Contact', icon: 'message' },
//       { key: 'blog', title: 'Blog', icon: 'public' },
//       { key: 'checklist', title: 'Checklist', icon: 'done' },
//       { key: 'more', title: 'More', icon: 'menu' }
//     ],
//   };

//   _goBack = () => console.log('Went back');

//   _onSearch = () => console.log('Searching');

//   _onMore = () => console.log('Shown more');

//   _handleIndexChange = index => this.setState({ index });

//   _renderScene = BottomNavigation.SceneMap({
//     home: HomeRT,
//     contact: ContactRT,
//     blog: BlogRT,
//     checklist: ChecklistRT,
//     more: MoreRT,
//   });

//   render() {
//     return (
//       <PaperProvider theme={theme}>
//         <Fragment>
//           <Appbar.Header>
//             <Appbar.BackAction
//               onPress={this._goBack}
//             />
//             <Appbar.Content
//               title="Safety Solutions"
//               subtitle="Safety is our goal!"
//             />
//             <Appbar.Action icon="search" onPress={this._onSearch} />
//             <Appbar.Action icon="more-vert" onPress={this._onMore} />
//           </Appbar.Header>
//           <BottomNavigation
//             navigationState={this.state}
//             onIndexChange={this._handleIndexChange}
//             renderScene={this._renderScene}
//           />
//         </Fragment>
//       </PaperProvider>
//     );
//   }
// }