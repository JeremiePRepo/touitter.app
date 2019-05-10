/*\
------------------------------------------------------------------------------
SendMessageForm.js
------------------------------------------------------------------------------
Ce composant gère le formulaire d'ajout de touit
------------------------------------------------------------------------------
\*/

/*\
Imports
------------------------------------------------------------------------------
\*/
import React from 'react';
import TouitApi from '../api/TouitApi';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

/*\
Class
------------------------------------------------------------------------------
\*/
class SendMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nom',
            message: 'Nouveau message',
        };
    }

    /**
     * Envoie des données pour le traitement
     */
    sendMessage = () => {
        this.TouitApi = new TouitApi();
        this.TouitApi.httpSendMessage(
            this.state.name,
            this.state.message,
            (response) => {
                if (response.success === true) {
                    console.log('Message Envoyé');
                    // TouitContainer.updateTouitContainer();
                    this.setState({
                        alertMessage: "Message envoyé"
                    });
                } else {
                    console.log('Il y a eu un problème');
                }
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Name :</Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}

                />
                <Text>Message :</Text>
                <TextInput
                    value={this.state.message}
                    onChangeText={(message) => this.setState({ message })}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.sendMessage}
                >
                    <Text> Valider </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default SendMessageForm;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})