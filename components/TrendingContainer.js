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

    updateTrendingContainer = () => {
        this.TouitApi = new TouitApi();
        this.TouitApi.httpGetTrending((response) => {
            // console.log(response);
            // this.setState({
            //     trending_datas: response
            // });
            // console.log(Object.entries(response));


            // Object.entries(response).forEach(element => {
            //     this.setState({
            //         trending_datas: [...this.state.touits_datas, ...element]
            //     });
            // });

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
            console.log(formatResponse);
            this.setState({
                trending_datas: formatResponse,
            });
            // console.log(this.state);



            // this.setState({
            //     trending_datas: Object.entries(response)
            // });
            // console.log(this.state);
            // for (let index = 0; index < response.length; index++) {
            //     // const element = array[index];
            //     console.log(Object.entries(response)[index]);
            // }
        })
    }

    render() {
        const { trending_datas } = this.state;
        // let dataArray = [];

        // for (let index = 0; index < trending_datas.length; index++) {
        //     const element = [index => trending_datas[index]];
        //     dataArray.push(element);
        // }

        // console.log(dataArray);


        return (
            <View style={styles.container}>
                <FlatList
                    data={trending_datas}
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                    renderItem={
                        ({ item }) => <Trending word={item.word} nb={item.nb} />
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
export default TrendingContainer;

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
    container: {
    },
})