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
            message: 'Votre message',
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
                <Text
                    style={styles.formMainText}
                >Entrer un nouveau message</Text>
                <TextInput
                    style={styles.inputName}
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}

                />
                <TextInput
                    style={styles.inputMessage}
                    value={this.state.message}
                    onChangeText={(message) => this.setState({ message })}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.sendMessage}
                >
                    <Text
                        style={styles.buttonText}
                    > Valider </Text>
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
        backgroundColor: '#AF7AC5',
        padding: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    formMainText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputName: {
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        paddingLeft: 18,
        borderRadius: 25,
        backgroundColor: '#FDFEFE',
        borderColor: '#FDFEFE',
        color: '#7B7D7D',
    },
    inputMessage: {
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        paddingLeft: 18,
        borderRadius: 25,
        backgroundColor: '#FDFEFE',
        borderColor: '#FDFEFE',
        color: '#7B7D7D',
    },
})