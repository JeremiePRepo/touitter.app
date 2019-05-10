/*\
------------------------------------------------------------------------------
App.js
------------------------------------------------------------------------------
Composant principal de l'application
------------------------------------------------------------------------------
\*/

/*\
Imports
------------------------------------------------------------------------------
\*/
import React from 'react';
import Header from './components/Header';
import TrendingContainer from './components/TrendingContainer';
import { StyleSheet, ScrollView } from 'react-native';
import TouitContainer from './components/TouitContainer';
import SendMessageForm from './components/SendMessageForm';

/*\
Class
------------------------------------------------------------------------------
\*/
export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <SendMessageForm />
        <TouitContainer />
        <TrendingContainer />
      </ScrollView>
    );
  }
}

/*\
Styles
------------------------------------------------------------------------------
\*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
