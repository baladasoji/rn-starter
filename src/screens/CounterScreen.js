import React , {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
      <View>
      <Button title='increase' onPress = {() => { setCount( count + 1)}}/>
      <Button title='decrease' onPress = {() => { setCount( count - 1)}}/>
      <Text> Counter is {count} </Text>
      </View>
  );
};

const styles=StyleSheet.create({
  textStyle : {
    fontSize:30
  }
});


export default CounterScreen;
