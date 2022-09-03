import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
import Peaks from './components/Peaks';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

const LogoTitle = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i0.wp.com/www.tdf.gov.tr/wp-content/uploads/2017/10/tdf2017_logo.jpg',
        }}
      />

      <Text style={styles.txt}>E-Zirve</Text>
      <Text style={styles.txt}>DAĞCILIK YÖNETİM SİSTEMİ</Text>
    </View>
  );
};

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Peaks"
          component={Peaks}
          options={({navigation, route}) => ({
            header: () => (
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Login);
                  }}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={25}
                    color="white"
                    style={{marginTop: 25}}
                  />
                </TouchableOpacity>

                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://i0.wp.com/www.tdf.gov.tr/wp-content/uploads/2017/10/tdf2017_logo.jpg',
                  }}
                />

                <Text style={styles.txt}>E-Zirve</Text>
                <Text style={styles.txt}>DAĞCILIK YÖNETİM SİSTEMİ</Text>
              </View>
            ),
            headerBackVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e53935',
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginLeft: 10,
    marginTop: 16,
  },
  txt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 10,
  },
});
