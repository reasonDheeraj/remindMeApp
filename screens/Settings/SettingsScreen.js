import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProps } from "react-navigation";
import { Platform } from "react-native";

import { Button, Icon } from "react-native-elements";

class SettingsScreen extends Component {
	static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Settings",
    // headerLeft: Platform.select({
    //   ios: null,
    //   android: (
    //     <Icon
    //       name="md-menu"
    //       type="ionicon"
    //       containerStyle={styles.icon}
    //       onPress={() => navigation.toggleDrawer()}
    //     />
    //   )
    // })
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen.</Text>
      </View>
    );
  }
}

export default SettingsScreen;
