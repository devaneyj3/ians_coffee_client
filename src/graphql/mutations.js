/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      name
      username
      code
      createdAt
      updatedAt
    }
  }
`;
export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
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
export const updateDrink = /* GraphQL */ `
  mutation UpdateDrink(
    $input: UpdateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    updateDrink(input: $input, condition: $condition) {
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
export const deleteDrink = /* GraphQL */ `
  mutation DeleteDrink(
    $input: DeleteDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    deleteDrink(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCartDrink = /* GraphQL */ `
  mutation CreateCartDrink(
    $input: CreateCartDrinkInput!
    $condition: ModelCartDrinkConditionInput
  ) {
    createCartDrink(input: $input, condition: $condition) {
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
export const updateCartDrink = /* GraphQL */ `
  mutation UpdateCartDrink(
    $input: UpdateCartDrinkInput!
    $condition: ModelCartDrinkConditionInput
  ) {
    updateCartDrink(input: $input, condition: $condition) {
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
export const deleteCartDrink = /* GraphQL */ `
  mutation DeleteCartDrink(
    $input: DeleteCartDrinkInput!
    $condition: ModelCartDrinkConditionInput
  ) {
    deleteCartDrink(input: $input, condition: $condition) {
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
