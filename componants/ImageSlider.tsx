import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { fetchNewsCuntry } from '../Services/apiServices';

const { width } = Dimensions.get('window');

const ImageSlider = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await fetchNewsCuntry();
    setArticles(data.articles.slice(0, 3));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={3000}
        width={width}
        height={250}
        data={articles}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
    flex:1
  },
  carouselItem: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageStyle: {
    width: '90%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ImageSlider;
