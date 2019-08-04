import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Status from './components/status'
import Player from './components/player'
import PlayButtons from './components/buttons'
import {options} from './uitls/data'


const randomChoice = () => options[Math.floor(Math.random() * options.length)];

const getResult = (playerOption, computerOption) => {
  let result;
  if (playerOption === 'ROCK')
    result = computerOption === 'SCISSOR' ? 'VICTORY' : 'LOSE';
  if (playerOption === 'SCISSOR')
    result = computerOption === 'PAPER' ? 'VICTORY' : 'LOSE';
  if (playerOption === 'PAPER')
    result = computerOption === 'ROCK' ? 'VICTORY' : 'LOSE';
  if (playerOption === computerOption)
    result = 'DRAW';
  return result;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOption: {},
      computerOption: {},
      result: '',
    }
  }

  onPressOptions = (playerChoice) => {
    const getPlayerChoice = options.find(option => option.name === playerChoice.name);
    const getComputerChoice = randomChoice();
    const result = getResult(getPlayerChoice.name, getComputerChoice.name);
    this.setState({
      playerOption: getPlayerChoice,
      computerOption: getComputerChoice,
      result,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <Status res={this.state.result}></Status>
        </View>
        <View style={styles.playGame}>
          <Player playerName="You" option={this.state.playerOption}></Player>
          <Player playerName="Computer" option={this.state.computerOption}></Player>
        </View>
        <View style={styles.btn}>
          <PlayButtons data={options} onPressOptions={this.onPressOptions}></PlayButtons>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  status: {
    flex: 0.1,
    fontSize: 18,
    fontWeight: "bold",
  },
  playGame: {
    flex: 0.6,
    flexDirection: 'row',
  },
  btn: {
    flex: 0.3,
  }
});
