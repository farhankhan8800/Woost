import Config from 'react-native-config';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const ENDPOINT = '/user/login';

const SelectChannelCategory = ({navigation}) => {
  const [selectCategory, setSelectCategory] = useState();
  useEffect(() => {}, []);
  const setArray = [];
  const getSelectCategory = category => {
    if (setArray.includes(category)) {
      setArray.splice(setArray.indexOf(category), 1);
      console.log(setArray.splice(setArray.indexOf(category), 1));
    } else {
      console.log(setArray.push(category));
    }
  };

  const data = [
    {name: 'Category1'},
    {name: 'gory2'},
    {name: 'Category3'},
    {name: 'Category4'},
    {name: 'Category5'},
    {name: 'Categdfgfsdgory1'},
    {name: 'Category1'},
    {name: 'Category1'},
    {name: 'Category1'},
    {name: 'Category1'},
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userDetailsBox}>
          <View>
            <Image source={require('../../assets/images/slectCategory.png')} />
          </View>
          <View style={styles.main_container}>
            <Text style={styles.heading}>
              Select the category of your channel
            </Text>
            <View style={styles.category_box}>
              {data.map((item, i) => {
                return (
                  <Text
                    style={[styles.category_list]}
                    onPress={() => getSelectCategory(item.name)}
                    key={i}>
                    {item.name}
                  </Text>
                );
              })}
            </View>
          </View>
          <View style={styles.back_button_box}>
            <TouchableOpacity
              style={styles.back_button}
              onPress={() => navigation.navigate('GetToKnowBetter')}>
              <Image
                style={styles.back_button_img}
                source={require('../../assets/images/right-arrow1.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  main_container: {
    position: 'absolute',
    top: 100,
    flex: 1,
    width: '90%',
    left: 25,
  },
  heading: {
    fontSize: 40,
    fontWeight: 700,
    color: '#fff',
    lineHeight: 50,
    textTransform: 'capitalize',
  },
  category_box: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 80,
    gap: 10,
  },
  category_list: {
    padding: 10,
    paddingLeft: 20,
    textAlign: 'center',
    paddingRight: 20,
    minWidth: 100,
    backgroundColor: '#DADADA',
    color: '#222',
    fontWeight: 500,
    fontSize: 17,
    elevation: 1,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#DADADA',
  },
  category_list_active: {
    borderColor: '#0A8AFF',
  },
  back_button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A8AFF',
  },
  back_button_box: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  back_button_img: {
    height: 30,
    width: 30,
  },
});

export default SelectChannelCategory;
