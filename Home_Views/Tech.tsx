import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Button, FlatList,ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NewsCounter = ({}) => {
  const navigation =useNavigation();
  const [articles, setArticles] = useState([]); 
  const[refrashing, setRefrish]=useState(false);
  const [loading, setLoading] = useState(true);
  const GetAPIlocation = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2024-12-15&to=2024-12-15&sortBy=popularity&apiKey=231cd4064bfa475496f764f8bfa68d9b`
      );
    
      if (res.data.articles && res.data.articles.length > 0) {
        const validArticles = res.data.articles.filter(
          (article) =>
            article.title && 
            article.description &&
            article.urlToImage&&
            article.urlToImage !== null &&
            !article.title.includes("[Removed]") && 
            !article.description.includes("[Removed]") 
        );
    
        setArticles(validArticles.slice(0, 6));
      } else {
        console.log("No valid articles found");
        setArticles([]); 
      }
    } catch (err) {
      console.error("Error fetching data:", err.message || err);
    }
    
  };
  
   const handlerefrish=async()=>{
   
    setRefrish(true)
 
    await GetAPIlocation();
    setRefrish(false)
  }
  useEffect(() => {
    GetAPIlocation();
  }, []);
 

  return (
    <View style={styles.containerStyle}>
      <FlatList
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
              <Image   source={{ uri: item.urlToImage ? item.urlToImage : 'NOW IMAGE' }} 
 style={styles.imageStyle} />
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

export default NewsCounter;
