import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

export default function HomeScreen() {

const [data, setData] = useState([])

const getData = () => {
  axios.get("http://192.168.97.96:3000/api/items").then((res) => {
    setData(res.data)
    console.log(res)
  })
}

useEffect(() => {
  // console.log("ok")
  getData()
 
}, []);

const renderItem = (item) => {
  //the app will represent each list item via a Text component
  return <Text style={styles.item}> {item.name}</Text>;
};

  return (
    <View>
       {data.map((item) => (
          <Text style={styles.item} key={item.id}> {item.name}</Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  item: {
    backgroundColor: "blue",
    color: "white",
    padding: 2,
    margin: 2,
  },
});
