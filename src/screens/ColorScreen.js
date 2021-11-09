import React , {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorScreen = () => {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);
  return (
      <View>
      <ColorCounter onIncrease={ () => setRed(red +10)} onDecrease={ ()=> setRed(red - 10)} color='red'/>
      <ColorCounter onIncrease={ () => setGreen(green +10)} onDecrease={ ()=> setGreen(green - 10)} color='green'/>
      <ColorCounter onIncrease={ () => setBlue(blue +10)} onDecrease={ ()=> setBlue(blue - 10)} color='blue'/>
      <View style={{ height:40, width:150, backgroundColor:`{rgb(${red},${green},${blue})}`}}></View>
      </View>
  );
};

const styles=StyleSheet.create({
  textStyle : {
    fontSize:30
  }
});


export default ColorScreen;
