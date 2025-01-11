import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Example = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* tüm elemanları kapsayan ana view */}
      <View style={{flex: 1}}>
        {/* header alanı oluşturacağım view */}
        <View style={styles.header}>
          <Text>ben headerım</Text>
        </View>

        {/* main >> sayfanın orta kısmı  */}
        <View style={styles.main}>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1735292247765-b03c73b96013?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />{' '}
              <Image
                style={styles.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
            </View>
          </ScrollView>
        </View>

        {/* footer >> alt menü */}
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Example;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2E5BF',
  },
  main: {
    backgroundColor: '#FD8B51',
  },
  image: {
    width: 132,
    height: 132,
    resizeMode: 'cover',
    margin: 1,
  },
});
