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
import { StyleSheet, View, FlatList } from 'react-native';

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
        };
        this.last_timestamp = 0;
    }

    /**
     * Fonction appelée au moment de générer le composant
     * TODO : this.TouitApi.getMessages(this.props.url, 0, callback);
     */
    componentDidMount() {
        this.updateTouitContainer();
        // setInterval(this.updateTouitContainer, 5000);
    }

    updateTouitContainer = () => {
        this.TouitApi = new TouitApi();
        this.TouitApi.httpGetMessages(this.last_timestamp, (response) => {
            this.last_timestamp = response.ts;
            this.setState({
                touits_datas: [...this.state.touits_datas, ...response.messages]
            });
        })
    }

    render() {
        const { touits_datas } = this.state;
        // console.log({ touits_datas });
        return (
            <View style={styles.container}>
                <FlatList inverted
                    data={touits_datas}
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                    renderItem={
                        ({ item }) => <Touit message={item.message} name={item.name} />
                        // {...item} revient à faire titre={item.titre} description={item.description}
                    }
                />
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
    container: {
    },
})
