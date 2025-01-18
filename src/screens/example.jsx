import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Example = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* tüm elemanları kapsayan ana view */}
      //! flex1 vermelisiniz
      <View style={{flex: 1, backgroundColor: 'red'}}>
        {/* header alanı oluşturacağım view */}

        <View style={styles.header}>
          {/* buton elementi her iki platformda kendi özwlliğinde buton yapısını kullanır., özelleştirilemez. */}
          {/* <Button title="Native Buttonum" /> */}

          {/* t.o ise sarmaladığı elemente basılabilirlik kazandırır.view ile tek farkı tıklanabilir olmaıs. */}

          <TouchableOpacity style={{alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                color: 'purple',
                fontSize: 24,
                backgroundColor: 'yellow',
              }}>
              Özelleştirilebilir Buttonum
            </Text>
          </TouchableOpacity>
        </View>

        {/* main >> sayfanın orta kısmı  */}
        <View style={styles.main}>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Image
                style={styles.image}
                source={require('./../assets/indir.png')}
              />
              <Image
                style={styles.image}
                source={require('../assets/indirr.png')}
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
            </View>
          </ScrollView>
        </View>

        {/* footer >> alt menü */}
        <View style={styles.bottomTab}>
          <View style={styles.bottomBox}>
            <Text style={styles.boxText}>Anasayfa</Text>
          </View>

          <View style={styles.bottomBox}>
            <Text style={styles.boxText}>Ara</Text>
          </View>

          <View style={styles.bottomBox}>
            <Text style={styles.boxText}>Kategoriler</Text>
          </View>

          <View style={styles.bottomBox}>
            <Text style={styles.boxText}>Profil</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Example;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2E5BF',
    flex: 1,
  },
  main: {
    backgroundColor: '#FD8B51',
    flex: 8,
  },
  image: {
    width: 132,
    height: 132,
    resizeMode: 'cover',
    margin: 1,
  },
  bottomTab: {
    flex: 1,
    backgroundColor: '#A294F9',
    flexDirection: 'row',
  },
  bottomBox: {
    flex: 1,
    backgroundColor: '#CDC1FF',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  boxText: {
    fontSize: 15,
    fontWeight: '400',
  },
});
