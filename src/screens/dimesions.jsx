import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {screenWidth, screenHeight} from '../utils/constans';

const Dimesions = () => {
  return <View style={homeStyles.container}></View>;
};

export default Dimesions;

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: screenWidth * 0.4,
    height: screenHeight * 0.4,
  },
});
