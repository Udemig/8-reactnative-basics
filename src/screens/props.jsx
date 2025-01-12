import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';
import {
  name,
  name1,
  name2,
  name3,
  name4,
  name5,
  meslek,
  meslek1,
  meslek2,
  meslek3,
  meslek4,
  meslek5,
} from '../constans/user';

const Props = () => {
  return (
    <SafeAreaView style={propsStyles.container}>
      <Card name={name} meslek={meslek} />
      <Card name={name1} meslek={meslek1} />
      <Card name={name2} meslek={meslek2} />
      <Card name={name3} meslek={meslek3} />
      <Card name={name4} meslek={meslek4} />
      <Card name={name5} meslek={meslek5} />
    </SafeAreaView>
  );
};

export default Props;

const propsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
