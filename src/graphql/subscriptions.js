/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin {
    onCreateAdmin {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin {
    onUpdateAdmin {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin {
    onDeleteAdmin {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink {
    onCreateDrink {
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
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink {
    onUpdateDrink {
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
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink {
    onDeleteDrink {
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
