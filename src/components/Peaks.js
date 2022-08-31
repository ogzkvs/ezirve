import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {get} from '../service';

const Peaks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      get('/sorgula?kod=qweqweqwe').then(result => {
        setData(result.doruklar);
      });
    };
    fetchData();
  }, []);

  const renderData = ({item}) => {
    console.log(item);
    return (
      <View
        style={
          item.kimlik % 2 !== 0 ? styles.dataContainer : styles.dataContainer2
        }>
        <View style={styles.dataView}>
          <Text style={styles.tanim}>{item.tanim}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.img} source={{uri: item.fotograf}} />
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                paddingVertical: 8,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <Text>Türkiye'nin en yüksek dağı</Text>
              <Text style={styles.lang}>
                Konum:{item.boylam},{item.enlem}
              </Text>
              <Text>Tırmanan Kişi Sayısı: {item.tirmananKisiSayisi}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../images/logo.jpg')} />
        <Text style={styles.txt}>E-Zirve</Text>
        <Text style={styles.txt}>DAĞCILIK YÖNETİM SİSTEMİ</Text>
      </View>
      <View style={styles.container}>
        <ImageBackground
          style={styles.mount}
          source={require('../images/mountphoto.jpg')}>
          <View style={styles.peakContainer}>
            <View style={styles.topcont}>
              <Image
                style={styles.flag}
                source={require('../images/flag.png')}
              />
              <Text style={styles.txtdrk}>DORUKLAR</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderData}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Peaks;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginLeft: 25,
    marginTop: 16,
  },
  flag: {
    width: 30,
    height: 30,
  },
  dataContainer: {
    backgroundColor: '#efefef',
    width: '100%',
  },
  dataContainer2: {
    backgroundColor: 'white',
    width: '100%',
  },
  lang: {
    fontSize: 10,
  },

  img: {
    width: 70,
    height: 70,
  },
  topcont: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  dataView: {paddingHorizontal: 20, paddingVertical: 5},
  txt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 10,
  },
  headtxt: {
    marginLeft: 115,
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  txtsystem: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  mount: {
    width: 400,
    height: 590,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  peakContainer: {
    backgroundColor: 'white',
    height: 700,
    width: 350,
  },
  input: {
    height: 40,

    borderWidth: 1,
    marginTop: 16,
  },
  txtdrk: {
    color: 'black',
    fontSize: 23,
    marginLeft: 10,
  },
  tanim: {
    color: 'blue',
    fontSize: 18,
  },
});
