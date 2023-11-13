/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrderdetails = /* GraphQL */ `
  query GetOrderdetails($id: ID!) {
    getOrderdetails(id: $id) {
      id
      address
      orders
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderdetails = /* GraphQL */ `
  query ListOrderdetails(
    $filter: ModelOrderdetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderdetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        orders
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPriceTable = /* GraphQL */ `
  query GetPriceTable($id: ID!) {
    getPriceTable(id: $id) {
      id
      itemname
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPriceTables = /* GraphQL */ `
  query ListPriceTables(
    $filter: ModelPriceTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPriceTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemname
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
