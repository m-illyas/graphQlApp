import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getBooksQuery} from '../queries/queries';
import {graphql} from 'react-apollo';
import BookDetail from './BookDetail';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  displayBooks = () => {
    var data = this.props.data;
    if (data.loading) {
      return <Text>Loading......</Text>;
    } else {
      return data.books.map(book => {
        return (
          <TouchableOpacity
            key={book.id}
            onPress={() => {
              this.setState({
                selected: book.id,
              });
            }}>
            <Text>{book.name}</Text>
          </TouchableOpacity>
        );
      });
    }
  };

  render() {
    return (
      <>
        <View>
          <Text> BookList </Text>
          {this.displayBooks()}
        </View>
        <BookDetail bookId={this.state.selected} />
      </>
    );
  }
}
export default graphql(getBooksQuery)(BookList);
