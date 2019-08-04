import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NumberFormat } from 'react-number-format';

const ratio = 23000;
// State from VND => USD
let state = 1;

export default function App() {
  const [currentCurrencyValue, setCurrentValue] = useState(0);
  const [convertCurrencyValue, setConvertValue] = useState(0);
  const changeState1 = () => {
    state = 1;
    // useEffect(convert)
    convert()
  }
  const changeState2 = () => {
    state = 0;
    // useEffect(convert)
    convert()
  }

  const convert = () => {
    state == 1 ? setConvertValue((currentCurrencyValue / ratio).toFixed(2)) : setConvertValue((currentCurrencyValue * ratio).toFixed(2))
  }

  useEffect(convert);

  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput keyboardType="number-pad" autoFocus textAlign="center"
        style={styles.input} placeholder="Enter value"
        onChangeText={setCurrentValue}></TextInput>
      <TouchableOpacity onPress={changeState1} style={styles.convertBtn}>
        <Text>VND => USD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeState2} style={styles.convertBtn}>
        <Text>USD => VND</Text>
      </TouchableOpacity>
      <Text>Current currency</Text>
      {/* <NumberFormat style={styles.output} thousandSeparator={true} value={currentCurrencyValue} /> */}
      <Text style={styles.output}>
        {currentCurrencyValue}
      </Text>
      <Text>Conversion currency</Text>
      {/* <NumberFormat style={styles.output} thousandSeparator={true} value={convertCurrencyValue} /> */}
      <Text style={styles.output}>
        {convertCurrencyValue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 2,
    borderColor: 'lightblue'
  },
  convertBtn: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
  output: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  }
});
