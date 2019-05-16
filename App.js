import React, { Component } from 'react';  
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import Home from './src/screens/Home';

// we will use these two screens later in our AppNavigator
import AddItem from './src/screens/AddItem';  
import List from './src/screens/List';

const AppNavigator = createStackNavigator(
  {  
  
    Home: {screen: Home},
    AddItem: {screen: AddItem},
    List: {screen: List}

  },{
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}