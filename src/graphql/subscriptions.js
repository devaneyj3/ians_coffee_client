/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        }
        createdAt
        updatedAt
      }
      Drinks {
        items {
          id
          cartID
          drinkID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      Drinks {
        items {
          id
          cartID
          drinkID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      Drinks {
        items {
          id
          cartID
          drinkID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      carts {
        items {
          id
          cartID
          drinkID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      carts {
        items {
          id
          cartID
          drinkID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      carts {
        items {
          id
          cartID
          drinkID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
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
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartDrink = /* GraphQL */ `
  subscription OnCreateCartDrink {
    onCreateCartDrink {
      id
      cartID
      drinkID
      cart {
        id
        User {
          id
          username
          name
          createdAt
          updatedAt
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
      }
      drink {
        id
        name
        type
        description
        price
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCartDrink = /* GraphQL */ `
  subscription OnUpdateCartDrink {
    onUpdateCartDrink {
      id
      cartID
      drinkID
      cart {
        id
        User {
          id
          username
          name
          createdAt
          updatedAt
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
      }
      drink {
        id
        name
        type
        description
        price
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCartDrink = /* GraphQL */ `
  subscription OnDeleteCartDrink {
    onDeleteCartDrink {
      id
      cartID
      drinkID
      cart {
        id
        User {
          id
          username
          name
          createdAt
          updatedAt
        }
        Drinks {
          nextToken
        }
        createdAt
        updatedAt
      }
      drink {
        id
        name
        type
        description
        price
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
