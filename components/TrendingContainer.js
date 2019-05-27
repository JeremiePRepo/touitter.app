/*\
------------------------------------------------------------------------------
TrendingContainer.js
------------------------------------------------------------------------------
Affiche la liste des mots clés
------------------------------------------------------------------------------
\*/

/*\
Imports
------------------------------------------------------------------------------
\*/
import React from 'react';
import TouitApi from '../api/TouitApi';
import { StyleSheet, FlatList, View } from 'react-native';
import Trending from './Trending';

/*\
Class
------------------------------------------------------------------------------
\*/
class TrendingContainer extends React.Component {

    /**
     * Constructeur, n'est appelé qu'une fois au tout début
     */
    constructor() {
        super();
        this.state = {
            trending_datas: [],
        };
    }

    /**
     * Fonction appelée au moment de générer le composant
     */
    componentDidMount() {
        this.updateTrendingContainer();
    }

    /**
     * Mets à jours la liste des mots-clés du trending
     */
    updateTrendingContainer = () => {
        this.TouitApi = new TouitApi();
        this.TouitApi.httpGetTrending((response) => {
            responseArray = Object.entries(response);
            formatResponse = [];
            for (let index = 0; index < responseArray.length; index++) {
                const element = responseArray[index];
                // console.log('element 0 : ' + element[0] + ' ; element 1 : ' + element[1] + ' ; index : ' + index);
                formatResponse.push(
                    {
                        "word": element[0],
                        "nb": element[1]
                    }
                );
            }
            formatResponse.sort(this.sortTrending);
            this.setState({
                trending_datas: formatResponse.slice(0, 10),
            });
        })
    }

    /**
     * Tri descendant des éléments
     */
    sortTrending = (a, b) => {
        return -(a.nb - b.nb);
    }

    /**
     * Render du component
     */
    render() {
        const { trending_datas } = this.state;
        return (
            <View style={styles.container}>
                {
                    trending_datas.map((item, index) => {
                        return(
                            <Trending key={index} word={item.word} nb={item.nb} style={styles.trending}/>
                        )
                    })
                }

            </View>
        );
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default TrendingContainer;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20
    },
    trending:{

    }
})