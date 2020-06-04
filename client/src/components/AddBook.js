import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {
  getAuthersQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';
import compose from 'lodash.flowright';

import {graphql} from 'react-apollo';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    };
  }
  displayAuthers = () => {
    var data = this.props.getAuthersQuery;
    if (data.loading) {
      return <Text>Loading......</Text>;
    } else {
      return data.authors.map(author => {
        return <Text key={author.id}>{author.id}</Text>;
      });
    }
  };
  handleSubmit = () => {
    console.log(this.state);
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      //refetch the needed query when we added this
      refetchQueries: [
        {
          query: getBooksQuery,
        },
      ],
    });
    this.setState({
      name: '',
      genre: '',
      authorId: '',
    });
  };

  render() {
    return (
      <View>
        <Text style={{marginLeft: 25}}> AddBook </Text>
        <View style={{marginTop: 10}}>
          <Text>Book</Text>
          <TextInput
            placeholder="Book"
            onChangeText={text => {
              this.setState({name: text});
            }}
            value={this.state.name}
            style={{borderColor: 'green', borderWidth: 2, height: 45}}
          />
          <Text>genre</Text>
          <TextInput
            placeholder="genre"
            onChangeText={text => {
              this.setState({genre: text});
            }}
            value={this.state.genre}
            style={{borderColor: 'green', borderWidth: 2, height: 45}}
          />
          <Text>Select Auther</Text>
          <TextInput
            placeholder="author"
            onChangeText={text => {
              this.setState({authorId: text});
            }}
            value={this.state.authorId}
            style={{
              borderColor: 'green',
              borderWidth: 2,
              height: 45,
            }}
          />
          {this.displayAuthers()}
        </View>
        <Button title="SUBMIT" onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default compose(
  graphql(getAuthersQuery, {name: 'getAuthersQuery'}),
  graphql(addBookMutation, {name: 'addBookMutation'}),
)(AddBook);
