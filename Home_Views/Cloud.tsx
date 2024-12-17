import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Button, FlatList,ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {fetchNewsTech} from '../Services/apiServices'

const NewsCloudCounter = ({}) => {
  const navigation =useNavigation();
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true);
   

  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchNewsTech();
        const valdation = data.articles.filter(
          (article) =>
            article.title && 
            article.description &&
            article.urlToImage&&
            article.urlToImage !== null &&
            !article.title.includes("[Removed]") && 
            !article.description.includes("[Removed]") 
        )
        setArticles(valdation.slice(0,6));
       
      };
      fetchData();
    }, []);

  return (
    <View style={styles.containerStyle}>
      <FlatList
      showsVerticalScrollIndicator={false}
        scrollEnabled={false}
       ListEmptyComponent={() => {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }}    
        data={articles} 
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
            <TouchableOpacity  onPress={() => navigation.navigate('Contant',{
                item: item,
                 })} >
            <View style={styles.inSideStyle}>
              <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
                <View style={styles.NewsAndAuthor}>
                   <Text style={styles.authorName}>{item.author || 'Unknown Author'}</Text>
                    <Text style={styles.textStyle}>{item.title}</Text>
                      <Text style={styles.dateStyle}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
            </View>
          </View>

          </TouchableOpacity>

        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    height:'100%',
    width:'100%',
    backgroundColor: '#0C0C0C',
    padding: 8,
  },
  inSideStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#222222',
    borderRadius: 8,
    padding: 8,
  },
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
  dateStyle: {
    color: '#A9A9A9',
    fontSize: 12,
    marginTop: 4,
  },
  NewsAndAuthor: {
    marginLeft: 8,
    flex: 1,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default NewsCloudCounter;