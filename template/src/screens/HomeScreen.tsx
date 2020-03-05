import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Home} from '../components/Home';
import {ThemeContext} from '../theme';

const HomeScreen = () => {
  const {stylesheet} = useContext(ThemeContext);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={stylesheet.safeAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={stylesheet.scrollView}>
          <Home />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
