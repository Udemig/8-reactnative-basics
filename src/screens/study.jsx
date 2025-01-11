import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Study = () => {
  return (
    // farklı cihazlarda çentik gibi durumlardan kurtulmak için safeareaview ile sarmalıyoruz.
    <SafeAreaView>
      {/* hem inline hemde stylesheet ile stillendirme yapabiliriz. */}
      <View
        style={{
          backgroundColor: '#7E5CAD',
          margin: 10,
          padding: 20,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* eğer bir string ifade yazacaksak mutlaka text içeirisnde yazmalıyız. */}
        <Text>Bu 1. notum</Text>
      </View>
      {/* react native de stiilendirme yaparken birim kullanılmaz. */}

      <View
        style={{
          backgroundColor: '#72BAA9',
          margin: 10,
          padding: 20,
          height: 250,
        }}>
        <Text>Bu 2. notum</Text>
      </View>

      <View style={styles.wrapperBox}>
        <View style={styles.box}>
          <Text style={styles.boxText}>1</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>2</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>3</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>4</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>5</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>6</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>7</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Study;

const styles = StyleSheet.create({
  wrapperBox: {
    backgroundColor: '#474E93',
    width: 350,
    height: 300,
    // sadece yatayda özellik vereceksek horizontol eğer dikeyde vereceksek vertical
    marginHorizontal: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: 'pink',
    margin: 10,
    width: 50,
    height: 50,
  },
  boxText: {
    fontSize: 20,
    fontWeight: '900',
  },
});
