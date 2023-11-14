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
export const getOrderdetails1 = /* GraphQL */ `
  query GetOrderdetails1($orders: String!) {
    getOrderdetails1(orders: $orders) {
      id
      address
      orders
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderdetails1s = /* GraphQL */ `
  query ListOrderdetails1s(
    $orders: String
    $filter: ModelOrderdetails1FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderdetails1s(
      orders: $orders
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
