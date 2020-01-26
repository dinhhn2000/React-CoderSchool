import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Dimensions
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

var fullWidth = Dimensions.get('window').width; //full width

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  submitUserName = () => {
    
    console.log(this.state.userName);
    this.props.navigation.navigate('Chat', {name: this.state.userName});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.userNameInput}
        onChangeText={(userName) => this.setState({userName})} />
        <TouchableOpacity 
        style={styles.submitBtn} 
        onPress={() => this.submitUserName()}>
          <Text style={styles.submitBtnContent}>Enter Chat Room</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userNameInput: {
    width: fullWidth * 80 / 100,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  submitBtn: {
    width: fullWidth * 40 / 100,
    height: 40,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitBtnContent: {
    color: 'white'
  }
});
