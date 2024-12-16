import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { useNavigation } from '@react-navigation/native';
import { fetchNewsCuntry } from '../Services/apiServices';

const NewsAICounter = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewsCuntry();
      setArticles(data.articles.slice(0, 6));
      setLoading(false);
    };
    fetchData();
  }, []);  if (loading) {
    return null;
  }

  const renderShimmer = () => {
    return Array(6)
      .fill(null)
      .map((_, index) => (
        <View key={index} style={styles.inSideStyle}>
          <ShimmerPlaceHolder
            style={styles.imageStyle}
            shimmerColors={['#444', '#666', '#444']}
            
          />
          <View style={styles.NewsAndAuthor}>
            <ShimmerPlaceHolder
              style={[styles.shimmerText, { width: '50%' }]}
              shimmerColors={['#444', '#666', '#444']}
              
            />
            <ShimmerPlaceHolder
              style={[styles.shimmerText, { width: '80%', marginTop: 8 }]}
              shimmerColors={['#444', '#666', '#444']}
              
            />
            <ShimmerPlaceHolder
              style={[styles.shimmerText, { width: '30%', marginTop: 8 }]}
              shimmerColors={['#444', '#666', '#444']}
              
            />
          </View>
        </View>
      ));
  };

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        renderShimmer()
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={articles}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Contant', {
                  item: item,
                })
              }
            >
              <View style={styles.inSideStyle}>
                <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
                <View style={styles.NewsAndAuthor}>
                  <Text style={styles.authorName}>{item.author || 'Unknown Author'}</Text>
                  <Text style={styles.textStyle}>{item.title}</Text>
                  <Text style={styles.dateStyle}>
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
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
  shimmerText: {
    height: 10,
    borderRadius: 4,
  },
});

export default NewsAICounter;
