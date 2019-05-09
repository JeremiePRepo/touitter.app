/*\
------------------------------------------------------------------------------
Touit.js
------------------------------------------------------------------------------
Ce component représente un touit
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
class Touit extends React.Component {
    render() {
        const { name, message } = this.props;
        // console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{message}</Text>
            </View>
        );
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default Touit;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
})