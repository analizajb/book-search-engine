// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
// done
type Query {
  me: User
}

// done
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(input: savedBook!): User
  removeBook(bookId: ID!): User
}

// done
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

// done
type Book {
  _id: ID!
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

// done
type Auth {
  token: ID
  user: User
}
`;

// export the typeDefs
module.exports = typeDefs;
