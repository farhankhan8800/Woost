import React, { useEffect,useState} from 'react';
import { Platform,View, Text, TouchableOpacity, StyleSheet, Image,Linking} from 'react-native';
import { Grid,ShoppingBag, Percent, PhoneCall, HelpCircle, LogOut, Tag, Key} from "react-native-feather";
// import { useDispatch } from 'react-redux';
// import { LOGGEDOUT } from '../redux/actionTypes';
// import { useSelector } from 'react-redux';
// import { Freshchat,FreshchatConfig} from 'react-native-freshchat-sdk';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const CustomDrawer = ({navigation}) => {
    useEffect(()=>{

        }, [])
    return (

        <View style={{}}>
            <View style={{backgroundColor: '#f27935', height: 120,}}>
            </View>
            <View style={styles.humburgerContainer}>
                <View style={styles.editProfile}>
                   <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                   <Text style={styles.edtiTxt}>Edit</Text>
                   </TouchableOpacity>
                </View> 
              <View style={styles.profileInfo}>
                 <View style={styles.profileimage}>
                   <View style={styles.profileImg}>
                    <Image source={require('../assets/images/profile-icon.png')} style={styles.imgProfile}/>
                   </View>
                </View>
                
                
                <View style={styles.profileName}>
                    <Text style={{ color:'black' }}>Hii,</Text>
                    <Text style={styles.pName}>
                       Guest
                        </Text>
                </View>
              </View>
            </View>
            <View style={styles.humburgerMenu}>
              
               <TouchableOpacity onPress={()=> navigation.navigate('Stores')}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <ShoppingBag style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>Stores</Text>
                </View>
               </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> navigation.navigate('Categories')}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <Grid style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>Categories</Text>
                </View>
               </View>
               </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate('Coupons')}>
              <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <Percent style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                <Text style={styles.menuTxt}>Coupons</Text>
                </View>
               </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate('Cashback')}>
              <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <Tag style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                <Text style={styles.menuTxt}>All Cashback</Text>
                </View>
               </View>
              </TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('AboutUs')}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <PhoneCall style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>About Us</Text>
                </View>
               </View>
               </TouchableOpacity>
{/* 
               <TouchableOpacity onPress={()=> navigation.navigate('FPL')}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <PhoneCall style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>FPL</Text>
                </View>
               </View>
               </TouchableOpacity> */}
               
               <TouchableOpacity onPress={()=> navigation.navigate('FAQ')}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <HelpCircle style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>Help & Support / FAQ's</Text>
                </View>
                
               </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=> navigation.navigate('Policy')}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <Key style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>User Policy</Text>
                </View>
                
               </View>
               </TouchableOpacity>

               {/* <TouchableOpacity onPress={async()=> { await Linking.openURL('https://m.freekaamaal.com/faq')}}>
               <View style={styles.menuListCon}>
                <View style={styles.menuIcon}>
                <HelpCircle style={styles.iconSize} width={18}/>
                </View>
                <View style={styles.menuName}>
                    <Text style={styles.menuTxt}>Help & Support</Text>
                </View>
               </View>
               </TouchableOpacity> */}
               
               <View style={styles.appVersion}>
                <Text style={styles.apptxt}>App v1.0.1</Text>
               </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    humburgerContainer: {
        padding: Platform.OS=='ios' ? 20 : null,
        paddingBottom: 0,
    },
    appVersion:{
        marginTop:50,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    apptxt:{
        color:'#666',
    },
    profileInfo: {
        backgroundColor: '#FAFAFA',
        borderRadius: 9,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',

    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editProfile: {
        position: 'absolute', 
        right:35,
        top: 35,
        zIndex: 999,
        backgroundColor: '#f27935',
        borderRadius: 45,
        padding: 8,
        width:60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    edtiTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    pName: {
        color:'black',
        fontSize: 18,
        fontWeight: '900'
    },
    humburgerMenu: {
       paddingLeft: 20,
       paddingRight: 20,
    },
    menuListCon: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: 'rgba(204, 204, 204, 0.3)',
        borderBottomWidth: 1,
    },
    menuName: {
        fontSize: 20,
        fontWeight: '500',
    },
    menuTxt : {
        color:'black',
        fontSize: 16,
        fontWeight: '400',
    },
    iconSize: {
        color: '#333',
        marginRight: 10,

    },
    imgProfile: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius:45,
    }

})

export default CustomDrawer;
