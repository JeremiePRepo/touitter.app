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
import PropTypes from "prop-types";

/*\
Class
------------------------------------------------------------------------------
\*/
class Touit extends React.Component {

    /**
     * Typage des Props
     */
    static propTypes = {
        message : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
    }

    /**
     * Rendu du component
     *
     * @returns {*}
     */
    render() {
        const { name, message } = this.props;
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
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        paddingLeft: 18,
        borderRadius: 5,
        backgroundColor: '#C6FF00',
    },
})