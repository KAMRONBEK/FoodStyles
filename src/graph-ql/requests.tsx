import {gql} from '@apollo/client';

export let GET_CARDS = gql`
  query {
    cards {
      id
      name
    }
  }
`;

export let DELETE_CARD = gql`
  mutation wrapper($id: ID!) {
    deleteCard(id: $id)
  }
`;
