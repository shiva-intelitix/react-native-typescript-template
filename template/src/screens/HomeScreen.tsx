import React, {useContext} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {Home} from '../components/Home';
import {ThemeContext} from '../theme';

const HomeScreen = () => {
  const {stylesheet} = useContext(ThemeContext);
  const insets = useSafeArea();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{paddingTop:insets.top}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={stylesheet.scrollView}>
          <Home />
        </ScrollView>
        </View>
    </>
  );
};

export default HomeScreen;
