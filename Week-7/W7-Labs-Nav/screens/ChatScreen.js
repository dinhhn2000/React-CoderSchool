import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from '../components/FirebaseConfig'

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userId: ''
        }
    }

    async componentWillMount() {
        // Check if users are null
        await firebase.ref('/users')
            .once('value')
            .then(snapshot => {
                // Database is null
                if (snapshot.exists() === false) {
                    this.setState({
                        // Because admin'd id is 0 so users' id begin with 1
                        userId: 1,
                    });

                    firebase.ref('/users').set([1]);
                } else { // Database is not null
                    let id = snapshot.val().length + 1;
                    let users = snapshot.val();
                    users[id - 1] = id;
                    this.setState({
                        userId: id,
                    })
                    firebase.ref('/users').set(users);
                }
            })

        // Check if messages are null
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
        console.log(messages[0]);

        messages[0].createdAt = new Date().getTime();
        await this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))

        await firebase.ref('/messages').set(this.state.messages);
    }

    render() {
        const { navigation } = this.props;
        const userName = navigation.getParam('name', 'NO-NAME');
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: this.state.userId,
                        name: userName,
                        avatar: `https://ui-avatars.com/api/?name=${userName}&size=140`,
                    }}
                    showUserAvatar={true}
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
