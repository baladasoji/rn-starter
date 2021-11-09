import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const ColorCounter = (props) => {
  console.log(props);
  return (
    <View>
    <Text> {props.color} </Text>
    <Button title={`Increase ${props.color}`} onPress={props.onIncrease} />
    <Button title={`Decrease ${props.color}`} onPress={props.onDecrease} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorCounter ;
