import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = (props) => {
  return (
    <View>
    <Button
      onPress = {()=> props.navigation.navigate('Components')}
      title= "Go to components demo"
    />
    <Button
      onPress = {()=> props.navigation.navigate('Lists')}
      title= "Go to List demo"
    />
    <Button
      onPress = {()=> props.navigation.navigate('Images')}
      title= "Go to Image demo"
    />
    <Button
      onPress = {()=> props.navigation.navigate('Counters')}
      title= "Go to Counter demo"
    />
    <Button
      onPress = {()=> props.navigation.navigate('Colors')}
      title= "Go to Colors demo"
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
