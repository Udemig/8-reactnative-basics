import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flex = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 5, backgroundColor: 'yellow'}}></View>
        <View style={{flex: 5, backgroundColor: 'blue'}}></View>
        <View style={{flex: 5, backgroundColor: 'pink'}}></View>
      </View>
    </SafeAreaView>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 50,
    backgroundColor: 'purple',
  },
});
