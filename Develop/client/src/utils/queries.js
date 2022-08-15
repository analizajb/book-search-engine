import { gql } from "@apollo/client";

export const GET_ME = gql`
// execute the "me" query set up using Apollo Server.
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;