/*\
------------------------------------------------------------------------------
TouitContainer.js
------------------------------------------------------------------------------
Génère la liste de tous les touits
------------------------------------------------------------------------------
\*/

/*\
Imports
------------------------------------------------------------------------------
\*/
import React from 'react';
import Touit from './Touit';
import TouitApi from '../api/TouitApi';
import {FlatList, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

/*\
Class
------------------------------------------------------------------------------
\*/
class TouitContainer extends React.Component {

    /**
     * Constructeur, n'est appelé qu'une fois au tout début
     */
    constructor(props) {
        super(props);
        this.state = {
            touits_datas: [],
            offset: 0,
        };
        this.last_timestamp = 0;
    }

    /**
     * Fonction appelée au moment de générer le composant
     * TODO : this.TouitApi.getMessages(this.props.url, 0, callback);
     */
    componentDidMount() {
        this.updateTouitContainer();
        setInterval(this.updateTouitContainer, 5000);
    }

    updateTouitContainer = () => {
        this.TouitApi = new TouitApi();
        this.TouitApi.httpGetMessages(this.last_timestamp, (response) => {
            this.last_timestamp = response.ts;
            this.setState({
                touits_datas: [...this.state.touits_datas, ...response.messages]
            });
        })
    };

    /**
     * Changer l'offset de la pagination
     */
    pagination = (offset=10) => {
        this.setState({
            offset: this.state.offset + offset,
            // end: this.state.end + changePage,
        })
    };

    render() {

        // Variables
        const {touits_datas, offset} = this.state;
        const INTERVAL=10;
        let buttonLess;

        // Affichage conditionnel
        if (this.state.offset > 0) {
            buttonLess =
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.pagination(-10)}
                >
                    <Text style={styles.buttonText}> Voir moins </Text>
                </TouchableHighlight>;
        }

        // Rendu
        return (
            <View style={styles.container}>
                {buttonLess}
                <FlatList
                    data={touits_datas.slice().reverse().slice(offset, offset + INTERVAL)}
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                    renderItem={
                        ({item}) => <Touit message={item.message} name={item.name}/>
                        // {...item} revient à faire titre={item.titre} description={item.description}
                    }
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.pagination(10)}
                >
                    <Text style={styles.buttonText}> Voir plus </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default TouitContainer;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {},
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
});
