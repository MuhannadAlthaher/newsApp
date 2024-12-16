import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import NewsCounteter from '../Home_Views/Tech';
import { NavigationProp, useRoute } from '@react-navigation/native';
import NewsAICounter from '../Home_Views/Ai';
import NewsCloudCounter from '../Home_Views/Cloud';
import ImageSlider from '../componants/ImageSlider';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

interface Route {
  key: string;
  title: string;
}

const FirstRoute = ({ navigation }: HomeScreenProps) =>{
  return(

  
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView  >
        
        <View style={[styles.scene]}>
        <ImageSlider/>
          {/* <Image style={styles.imageStyle} source={require('../assets/Card.png')} /> */}
          <View style={styles.divider}></View>
          <View style={styles.topAndSeeAll}>
            <Text style={styles.topAndSeeall}>Top Stories</Text>
            <Text style={styles.topAndSeeall}>See all</Text>
          </View>
          <NewsCounteter navigation={navigation} />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
);
} 

const SecondRoute = () => (
  
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ScrollView  >
      <View style={[styles.scene]}>
      <ImageSlider/>
        {/* <Image style={styles.imageStyle} source={require('../assets/Card.png')} /> */}
        <View style={styles.divider}></View>
        <View style={styles.topAndSeeAll}>
          <Text style={styles.topAndSeeall}>Top Stories</Text>
          <Text style={styles.topAndSeeall}>See all</Text>
        </View>
        <NewsAICounter />
      </View>
    </ScrollView>
  </GestureHandlerRootView>
);
const TehrdRoute =()=>(
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ScrollView  >
      <View style={[styles.scene]}>
      <ImageSlider/>
        {/* <Image style={styles.imageStyle} source={require('../assets/Card.png')} /> */}
        <View style={styles.divider}></View>
        <View style={styles.topAndSeeAll}>
          <Text style={styles.topAndSeeall}>Top Stories</Text>
          <Text style={styles.topAndSeeall}>See all</Text>
        </View>
        <NewsCloudCounter />
      </View>
    </ScrollView>
  </GestureHandlerRootView>
)

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'first', title: 'Tech' },
    { key: 'second', title: 'AI' },
    { key: 'third', title: 'Cloud' },

  ]);

  const renderScene = ({ route }: { route: Route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute navigation={navigation} />;
      case 'second':
        return <SecondRoute   />;
      case 'third':
        return <TehrdRoute />;
      default:
        return null;
    }
  };
 
  return (
    
 <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={styles.container}
      tabBarPosition="top"
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={styles.tabBar}
          labelStyle={styles.tabLabel}
          indicatorStyle={styles.tabIndicator}
        />
      )}
    />
   
   
  );
};

const styles = StyleSheet.create({
  safeArea:{flex: 1, backgroundColor: '#0E0E0E'},
  container: { flex: 1, backgroundColor: '#0E0E0E' },
  scene: { flex: 1, justifyContent: 'flex-start', alignItems: 'center',backgroundColor: '#0E0E0E'  },
  text: { fontSize: 18, color: '#ffffff' },
  tabBar: { backgroundColor: '#171717' },
  tabLabel: { color: '#ffffff' },
  tabIndicator: { backgroundColor: '#D32A2F' },
  imageStyle: { marginTop: 16, width: 380, height: 180, marginBottom: 12, resizeMode: 'stretch' },
  divider: { borderBottomColor: '#1F1F1F', borderBottomWidth: 1, width: 380 },
  topAndSeeAll: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  topAndSeeall: { fontSize: 16, color: '#ffffff', fontWeight: 'bold' },
});

export default HomeScreen;
