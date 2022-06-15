/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      cartDrinksId
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
      createdAt
      updatedAt
      cartDrinksId
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
      createdAt
      updatedAt
      cartDrinksId
    }
  }
`;
