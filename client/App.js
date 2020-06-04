import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import BookList from './src/components/BookList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AddBook from './src/components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView>
          <ScrollView>
            <View style={{marginTop: 15, marginLeft: 13}}>
              <BookList />
            </View>
            <View style={{height: 2, width: '100%', backgroundColor: 'red'}} />
            <View style={{marginTop: 17, marginLeft: 12}}>
              <AddBook />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}
