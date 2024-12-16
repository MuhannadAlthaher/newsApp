import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FavoritesContext } from '../store/context/favorite-news';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/Login';

const Profile = () => {
    const { favoriteitems,removFavorite } = useContext(FavoritesContext);
    const user = useSelector((state:RootState) => state.login.user);
    // const users = user.map(
    //     (users) => users === user.username
    //   );
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account</Text>
            <View style={styles.profileContant}>
                <View style={styles.profilCountainer}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/person-outline.png')}
                    />
                </View>
                <View style={styles.nameAndSpicalization}>
                    <Text style={styles.userName}>{user.username}</Text>
                    <Text style={styles.spicalization}>Software Developer</Text>
                </View>
            </View>

            <Text style={styles.text}>Favorite</Text>
           
            {favoriteitems.length > 0 ? (
                <FlatList
                    data={favoriteitems}
                    
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={({ item }) => (
                        <View style={styles.inSideStyle}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.imageStyle}
                            />
                            <View style={styles.NewsAndAuthor}>
                                <Text style={styles.authorName}>{item.auth || 'Unknown Author'}</Text>
                                <Text style={styles.textStyle}>{item.title}</Text>
                            </View>
                            

                           <FontAwesome6 name='trash' size={35} color={'#EF3B42'} onPress={()=>removFavorite(item.auth)}/>

                        </View>
                    )}
                />
            ) : (
                <Text style={styles.emptyMessage}>No favorite items yet!</Text>
            )}
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
        fontSize: 16,
        maxWidth: '70%',
        flexShrink: 1,
        overflow: 'hidden',
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
        fontSize: 25,
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
        padding: 8,
    },
    emptyMessage: {
        fontSize: 16,
        color: '#A9A9A9',
        marginTop: 20,
    },
});

export default Profile;
