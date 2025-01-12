import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = props => {
  console.log(props);
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
        {props.meslek}
      </Text>
    </View>
  );
};

export default Card;
