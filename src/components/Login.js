import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import {getLogin} from '../service';
import Peaks from './Peaks';

const Login = ({navigation}) => {
  const login = React.useRef({
    id: '',
    pw: '',
  });

  const tcControl = () => {
    getLogin('tc=' + login.id + '&sifre=' + login.pw).then(data => {
      if (data.aciklama === 'Başarılı') {
        {
          navigation.navigate(Peaks);
        }
      } else {
        Alert.alert('Bilgi', 'Bu Koşula uyan kullanıcı bulunamadı', [
          {text: 'Tamam'},
        ]);
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://i0.wp.com/www.tdf.gov.tr/wp-content/uploads/2017/10/tdf2017_logo.jpg',
          }}
        />
        <Text style={styles.txt}>E-Zirve</Text>
      </View>
      <View style={styles.headtxt}>
        <Text style={styles.txtsystem}>Dağcılık Yönetim Sistemi</Text>
      </View>
      <View style={styles.container}>
        <ImageBackground
          style={styles.mount}
          source={require('../images/mountphoto.jpg')}>
          <View style={styles.logincontainer}>
            <Text style={styles.id}>Kullanıcı Adı</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => (login.id = value)}
              value={login.id}
            />
            <Text style={styles.id}>Şifre</Text>

            <TextInput
              style={styles.input}
              onChangeText={pw => (login.pw = pw)}
              value={login.pw}
            />

            <View style={{marginTop: 35}}>
              <Button
                title="GİRİŞ"
                color="blue"
                onPress={() => {
                  tcControl();
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e53935',
    height: 60,
    width: '100%',
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginLeft: 25,
    marginTop: 16,
  },
  txt: {
    color: 'white',
    fontSize: 18,
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
    color: 'red',
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
    paddingVertical: 230,
  },
  logincontainer: {
    backgroundColor: 'white',
    height: 320,
    width: 350,

    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  input: {
    height: 40,

    borderWidth: 1,
    marginTop: 16,
  },
  id: {
    color: 'black',
    fontSize: 16,
    marginTop: 16,
  },
});
