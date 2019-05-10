/*\
------------------------------------------------------------------------------
Trending.js
------------------------------------------------------------------------------
Affiche un de mots du trending
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
class Trending extends React.Component {
    render() {
        const { word, nb } = this.props;
        return (
            <View style={styles.container}>
                <Text>{word} ({nb})</Text>
            </View>
        );
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default Trending;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {
    },
})