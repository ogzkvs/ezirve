import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {post} from '../service';
import Peaks from './Peaks';

const Login = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idcontrol, setIdcontrol] = useState(false);
  const [pwcontrol, setPwcontrol] = useState(false);
  const [value, setValue] = useState('');
  const [pw, setPw] = useState('');

  useEffect(() => {
    const fetchData = () => {
      getLogin('tc=12354676532&sifre=123').then(result => {
        setData(result.kullanici);
      });
    };
    fetchData();
  }, []);

  const tcControl = () => {
    if (value === '12354676532') {
      setIdcontrol(true);
    }
    if (pw === '123') {
      setPwcontrol(true);
    }
    if (idcontrol === true && pwcontrol === true) {
      console.log('giriş sağlandı');
      setIdcontrol(false);
      setPwcontrol(false);
      navigation.navigate(Peaks);
      setValue('');
      setPw('');
    } else {
      console.log('no giriş');
    }
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../images/logo.jpg')} />
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
              onChangeText={value => setValue(value)}
              value={value}
            />
            <Text style={styles.id}>Şifre</Text>

            <TextInput
              style={styles.input}
              onChangeText={pw => setPw(pw)}
              value={pw}
            />

            <View style={{marginTop: 35}}>
              <Button
                title="GİRİŞ"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
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
    backgroundColor: 'red',
    height: 60,
    width: '100%',
    flexDirection: 'row',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 60,
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
