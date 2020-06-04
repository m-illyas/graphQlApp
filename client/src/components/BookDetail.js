import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getBookQuery} from '../queries/queries';
import {graphql} from 'react-apollo';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayBookDetails = () => {
    const {book} = this.props.data;
    if (book) {
      return (
        <>
          <Text>{book.name}</Text>
          <Text>{book.genre}</Text>
        </>
      );
    } else {
      <Text>no book selected.....</Text>;
    }
  };

  render() {
    return (
      <View>
        <Text>{this.displayBookDetails()}</Text>
      </View>
    );
  }
}

//id kodukkumbol bakki yulla ellam kittum anganeyanu ithu define cheythirikkunnath
//oro samayavum ith update aakumbol evide function run cheyyum
export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetail);
