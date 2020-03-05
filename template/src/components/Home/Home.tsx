import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../theme';

const Home = () => {
  const {stylesheet} = useContext(ThemeContext);
  return (
    <View style={stylesheet.body}>
      <Text style={stylesheet.boldText}>
        Agritrac React Native Typescript Template
      </Text>
    </View>
  );
};
export default Home;
