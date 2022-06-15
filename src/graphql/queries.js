/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      Cart {
        id
        User {
          id
          username
          name
          createdAt
          updatedAt
          userCartId
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
        cartUserId
      }
      createdAt
      updatedAt
      userCartId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        Cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        createdAt
        updatedAt
        userCartId
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      User {
        id
        username
        name
        Cart {
          id
          createdAt
          updatedAt
          cartUserId
        }
        createdAt
        updatedAt
        userCartId
      }
      Drinks {
        items {
          id
          name
          type
          description
          price
          createdAt
          updatedAt
          cartDrinksId
        }
        nextToken
      }
      createdAt
      updatedAt
      cartUserId
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User {
          id
          username
          name
          createdAt
          updatedAt
          userCartId
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
        cartUserId
      }
      nextToken
    }
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDrink = /* GraphQL */ `
  query GetDrink($id: ID!) {
    getDrink(id: $id) {
      id
      name
      type
      description
      price
      createdAt
      updatedAt
      cartDrinksId
    }
  }
`;
export const listDrinks = /* GraphQL */ `
  query ListDrinks(
    $filter: ModelDrinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        description
        price
        createdAt
        updatedAt
        cartDrinksId
      }
      nextToken
    }
  }
`;
