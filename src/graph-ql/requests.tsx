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

export let DUPLICATE_CARD = gql`
  mutation wrapper($id: ID!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;

export let CREATE_CARD = gql`
  mutation {
    createCard(
      data: {
        name: "My Food Style"
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;

export let SHARE_CARD = gql`
  mutation wrapper($id: ID!) {
    shareCard(id: $id)
  }
`;
