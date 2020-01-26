import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from '../W7-Labs/Components/FirebaseConfig'

const userName = 'zZz';
const id = Math.floor(Math.random() * 100);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  async componentWillMount() {
    // Check if database is null
    await firebase.ref('/messages')
      .once('value')
      .then(snapshot => {
        // Database is null
        if (snapshot.exists() === false) {
          this.setState({
            messages: [
              {
                _id: '0',
                text: 'Wellcome to chat community',
                createdAt: new Date().getTime(),
                user: {
                  _id: 0,
                  name: 'Admin',
                  avatar: 'https://ui-avatars.com/api/?name=A+d&size=140',
                },
              },
            ],
          });

          firebase.ref('/messages').set(this.state.messages);
        }
      })

    // Always update data from firebase
    firebase.ref('/messages').on('value', snapshot => {
      this.setState({
        messages: snapshot.val()
      })
    });
  }

  async onSend(messages = []) {
    console.log(messages[0].createdAt);
    messages[0].createdAt = new Date().getTime();
    await this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

    await firebase.ref('/messages').set(this.state.messages);



    // console.log(this.state.messages);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: id,
            name: userName,
            avatar: `https://ui-avatars.com/api/?name=${userName}&size=140`,
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
