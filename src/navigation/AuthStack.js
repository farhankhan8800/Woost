import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {
  Grid,
  ShoppingBag,
  Home as HomeIcon,
  Users,
  User,
  Percent,
  PhoneCall,
  HelpCircle,
  LogOut,
  Tag,
} from 'react-native-feather';
import Home from '../screens/Home';
import Onboard from '../screens/Onboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// WithdrawMoney

import {useIsFocused} from '@react-navigation/native';
// import RNRestart from 'react-native-restart';
// WithdrawMoney
import {View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import FPL from '../screens/Fpl';
//WithDrawRefferal
// import WithdrawRefferal from '../screens/Dashboard/WithdrawRefferal';
// import ChangePassword from '../screens/Dashboard/ChangePassword';
// import { useSelector } from 'react-redux';
import {useEffect, useState, useCallback} from 'react';
import {ShoppingCart} from 'react-native-feather';
import Profile from '../screens/Profile';
import OTP from '../screens/Otp';
import SignUp from '../screens/Signup';
import SplashScreen from '../screens/Splash';
import EnterOTP from '../screens/Otp';
import SocialProfile from '../screens/SocialProfile';
import UserProfile from '../screens/UserProfile';

//WithDrawRefferal

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation}) => {
  const isFocused = useIsFocused();
  // const startReload = ()=> RNRestart.Restart();

  // const userToken = useSelector(state => state.user.userToken);
  const horizontalAnimation = {
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  const [refresh, setReferesh] = useState(false);
  const onRefresh = () => {
    console.log('Tets');
    setReferesh(true);
    setTimeout(() => {
      setReferesh(false);
    }, 2000);
  };
  useEffect(() => {}, []);

  return (
    <Tab.Navigator
      navigation={navigation}
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#f27935',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '900',
        },
      }}>
      <Tab.Screen
        name="Root"
        component={Home}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarScrollEnabled: true,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.tabLink,
                focused ? styles.active : styles.tabLink,
              ]}>
              <HomeIcon
                style={{
                  width: 26,
                  height: 26,
                  color: 'black',
                  resizeMode: 'contain',
                  tintColor: focused ? '#333' : 'black',
                }}
              />
            </View>
          ),
        }}
        // listeners={{
        //     tabPress: e => {
        //         startReload()
        //     },
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          BottomTabs: false,
          unmountOnBlur: true,
          title: '',
          tabBarScrollEnabled: true,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.tabLink,
                focused ? styles.active : styles.tabLink,
              ]}>
              <ShoppingBag
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: 'contain',
                  color: 'black',
                  tintColor: focused ? '#333' : 'black',
                }}
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={styles.backArrow}>
                <Image
                  source={require('../assets/images/backArrow.png')}
                  style={styles.backIcon}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Login1"
        component={Profile}
        options={{
          BottomTabs: false,
          title: 'Login',
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.tabLink,
                focused ? styles.active : styles.tabLink,
              ]}>
              <Users
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                  color: 'black',
                  tintColor: focused ? '#333' : 'black',
                }}
              />
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={styles.backArrow}>
                <Image
                  source={require('../assets/images/backArrow.png')}
                  style={styles.backIcon}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Login"
        component={Profile}
        options={{
          BottomTabs: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.tabLink,
                focused ? styles.active : styles.tabLink,
              ]}>
              <User
                style={{
                  width: 26,
                  height: 26,
                  color: 'black',
                  resizeMode: 'contain',
                  tintColor: focused ? '#333' : 'black',
                }}
              />
            </View>
          ),
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={styles.backArrow}>
                <Image
                  source={require('../assets/images/backArrow.png')}
                  style={styles.backIcon}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

     
    </Tab.Navigator>
  );
};

const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f27935',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '900',
        },
      }}
      initialRouteName={SplashScreen}>
      <Stack.Screen
        name="Splashscreen"
        component={SplashScreen}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false, title: ''}}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false, title: ''}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{headerShown: false, title: ''}}
      />
      <Stack.Screen
        name="Otp"
        component={EnterOTP}
        options={{headerShown: false, title: ''}}
      />
      
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false, title: ''}}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          BottomTabs: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={styles.backArrow}>
                <Image
                  source={require('../assets/images/backArrow.png')}
                  style={styles.backIcon}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="Socialprofile"
        component={SocialProfile}
        options={{headerShown: false, title: ''}}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  active: {
    backgroundColor: '#FFE6D8',
  },
  tabLink: {
    height: 45,
    width: 45,
    borderRadius: 12,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default AuthStack;
