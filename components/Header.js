/*\
------------------------------------------------------------------------------
Header.js
------------------------------------------------------------------------------
Header principal de l'application.
------------------------------------------------------------------------------
\*/

/*\
Imports
------------------------------------------------------------------------------
\*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*\
Class
------------------------------------------------------------------------------
\*/
class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>Touitter App</Text>
            </View>
        );
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default Header;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    containerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})