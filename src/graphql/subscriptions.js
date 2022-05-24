/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink {
    onCreateDrink {
      id
      type
      name
      description
      quantity
      price
      image {
        bucket
        region
        key
      }
      orders {
        items {
          id
          name
          username
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
      type
      name
      description
      quantity
      price
      image {
        bucket
        region
        key
      }
      orders {
        items {
          id
          name
          username
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
      type
      name
      description
      quantity
      price
      image {
        bucket
        region
        key
      }
      orders {
        items {
          id
          name
          username
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
      id
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
      id
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
      id
      name
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      username
      orders {
        items {
          id
          type
          name
          description
          quantity
          price
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      username
      orders {
        items {
          id
          type
          name
          description
          quantity
          price
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      username
      orders {
        items {
          id
          type
          name
          description
          quantity
          price
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
