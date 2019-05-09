import React from 'react';
import Header from './components/Header';
import { StyleSheet, ScrollView } from 'react-native';
import TouitContainer from './components/TouitContainer';
import SendMessageForm from './components/SendMessageForm';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <SendMessageForm />
        <TouitContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
