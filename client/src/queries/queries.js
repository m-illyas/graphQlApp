import {gql} from 'apollo-boost';
const getAuthersQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

//to get the details of a perticular book
//here we only passing id and retrieving all things we given below
const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

//to injuct dynamic data we added the bracket for mutation here,
//add fro the form
//String!  means it has to be non null
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export {getAuthersQuery, getBooksQuery, addBookMutation, getBookQuery};
