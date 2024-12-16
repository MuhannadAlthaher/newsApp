import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { FavoritesContext } from '../store/context/favorite-news';
import React, { useContext } from 'react';

const Contant = ({ route }) => {
    const { item } = route.params;
    const { favoriteitems, addFavorite, removFavorite } = useContext(FavoritesContext);
    const auth = item.author || 'Unknown Author';
    const image = item.urlToImage;
    const title=item.title;
    const favAuth = favoriteitems.some((fav) => fav.auth === auth);
    function favNewsAuth() {
        if (favAuth) {
            removFavorite(auth);  
        } else {
            addFavorite(auth,title,image);    
        }
    }
    console.log(favoriteitems)
    return (
        <View style={style.contatView}>
            <Image source={{ uri: item.urlToImage }} style={style.imageStyle} />
            <View style={style.autherView}>
                <FontAwesome6 name="pen" size={14} color={'#9A81D5'} />
                <Text style={style.authorStyle}>{auth}</Text>
            </View>
            <Text style={style.titleStyle}>{item.title}</Text>
            <View>
                <Text style={style.dateStyle}>{item.publishedAt}</Text>
            </View>
            <View style={style.socalMedeaView}>
                <FontAwesome6 name="facebook" size={20} color={'#C4C4C4'} style={style.socalMedea} />
                <FontAwesome6 name="x" size={20} color={'#C4C4C4'} style={style.socalMedea} />
                <FontAwesome6 name="linkedin" size={20} color={'#C4C4C4'} style={style.socalMedea} />
                <FontAwesome6 
                    name={favAuth ? 'bookmark' : 'bookmark'} 
                    size={20} 
                    color={favAuth ? '#FED033': '#C4C4C4'} 
                    style={style.socalMedea} 
                    onPress={favNewsAuth}
                />
            </View>
            <Text style={style.sourceStyle} numberOfLines={1}>
                Source: {item.source.name}
            </Text>
            <Text style={style.contentStyle}>{item.content}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    contatView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    imageStyle: {
        width: '100%',
        height: 300,
        marginBottom: 16,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        marginBottom: 8,
        marginLeft: 2,
        padding: 8,
    },
    authorStyle: {
        fontSize: 14,
        color: '#9A81D5',
        textAlign: 'left',
        marginRight: '60%',
        marginBottom: '2%',
        marginLeft: '1%',
    },
    autherView: {
        flexDirection: 'row',
    },
    dateStyle: {
        color: '#A9A9A9',
        fontSize: 12,
        marginTop: 4,
        marginRight: '67%',
    },
    socalMedea: {
        paddingHorizontal: 8,
    },
    socalMedeaView: {
        marginTop: '3%',
        marginRight: '70%',
        flexDirection: 'row',
    },
    sourceStyle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'space-between',
        marginBottom: 8,
        padding: 8,
        marginRight: '70%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    contentStyle: {
        fontSize: 14,
        color: '#fff',
        marginTop: 8,
        padding: 8,
        textAlign: 'left',
    },
});

export default Contant;
