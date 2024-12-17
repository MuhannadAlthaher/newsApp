import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FavoritesContext } from '../store/context/favorite-news';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/Login';
import { PixelRatio } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const Profile = ({navigation}) => {
    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }], 
            })
        );
    };
const size=Dimensions.get('screen')/2
    const scaleFontSize = (size) => {
        const scale = PixelRatio.getFontScale();
        return size * scale;
    };

    const scaleSize = (size) => {
        const scale = PixelRatio.get();
        return size * scale;
    };

    const { favoriteitems, removFavorite } = useContext(FavoritesContext);
    const user = useSelector((state: RootState) => state.login.user);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: scaleFontSize(20) }]}>Account</Text>
            <View style={styles.profileContant}>
                <View style={[styles.profilCountainer, { height: scaleSize(16), width: scaleSize(16) }]}>
                    <Image
                        style={[styles.imageStyle, { height: scaleSize(10), width: scaleSize(10) }]}
                        source={require('../assets/person-outline.png')}
                    />
                </View>
                <View style={styles.nameAndSpicalization}>
                    <Text style={[styles.userName, { fontSize: scaleFontSize(16) }]}>{user.username}</Text>
                    <Text style={[styles.spicalization, { fontSize: scaleFontSize(15) }]}>Software Developer</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
            <Text style={[styles.text, { fontSize: scaleFontSize(16) }]}>Favorite</Text>

{favoriteitems.length > 0 ? (
    <FlatList
        data={favoriteitems}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <View style={styles.inSideStyle}>
                <Image
                    source={{ uri: item.image }}
                    style={[styles.imageStyle, { height: scaleSize(16), width: scaleSize(16) }]}
                />
                <View style={styles.NewsAndAuthor}>
                    <Text style={[styles.authorName, { fontSize: scaleFontSize(12), marginTop: scalePadding(7)}]}>{item.auth || 'Unknown Author'}</Text>
                    <Text style={[styles.textStyle, { fontSize: scaleFontSize(15) }]}>{item.title}</Text>
                </View>

                <FontAwesome6
                    name='trash'
                    size={scaleFontSize(20)}
                    color={'#EF3B42'}
                    onPress={() => removFavorite(item.auth)}
                />
            </View>
        )}
    />
) : (
    <Text style={[styles.emptyMessage, { fontSize: scaleFontSize(16),        paddingBottom:scalePadding(60),
    }]}>No favorite items yet!</Text>
)}

            </View>

            <TouchableOpacity onPress={handleLogout}>
                <View style={[styles.logOutButton, { height: scaleSize(16), width: scaleSize(100),marginBottom: scalePadding(3) }]}>
                    <Text style={[styles.logoutText, { fontSize: scaleFontSize(25) }]}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    authorName: {
        color: '#A9A9A9',
        fontSize: 12,
        paddingBottom: 4,
        fontWeight: 'bold',
    },
    textStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        maxWidth: '70%',
        flexShrink: 1,
        overflow: 'hidden',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0E0E0E',
    },
    NewsAndAuthor: {
        marginLeft: 8,
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginRight: '70%',
        marginTop: '7%',
    },
    profilCountainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 56,
        width: 56,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 4, 
    },
    userName: {
        color: '#fff',
        fontSize: 20,
    },
    profileContant: {
        flexDirection: 'row',
        marginRight: '45%',
        marginTop: '7%',
    },
    nameAndSpicalization: {
        marginLeft: 13,
    },
    spicalization: {
        color: '#fff',
        fontSize: 14,
    },
    inSideStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        width:400,
        backgroundColor: '#222222',
        borderRadius: 8,
        padding: 10,
    },
    emptyMessage: {
        
        fontSize: 16,
        color: '#A9A9A9',
        marginTop: 20,
    },
    logOutButton:{
        
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:8,
        backgroundColor:'#fff',
        height:50,
        width:255,
    },logoutText:{
        color:'red',
        fontSize:25,
        fontWeight:'bold'
    }
});

export default Profile;
