import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings'; // Remember to import the other navigators later

import React from 'react';
import { Icon } from "react-native-elements";
import { Platform } from "react-native";

import { createStackNavigator,StackViewTransitionConfigs } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: NavigationTransitionProps
): TransitionConfig => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator(
  { DetailScreen, HomeScreen, OptionsScreen },
  { initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition }
);

HomeStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }: TabScene) => (
      <Icon name="ios-home" type="ionicon" color={tintColor} />
    ),
    drawerLockMode,
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }: TabScene) => (
      <Icon name="md-home" type="ionicon" color={tintColor} />
    )
  };
};

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ tintColor }: TabScene) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
  drawerLabel: "Settings",
  drawerIcon: ({ tintColor }: TabScene) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
  //android: createDrawerNavigator({ HomeStack, SettingsStack }, { contentComponent: BurgerMenu })
  android: createBottomTabNavigator({ HomeStack, SettingsStack })
});

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator },
  { initialRouteName: "LoadingScreen" }
);


const App = createAppContainer(RootSwitch);

export default App;