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
export const getPriceTable1 = /* GraphQL */ `
  query GetPriceTable1($price: String!) {
    getPriceTable1(price: $price) {
      id
      itemname
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPriceTable1s = /* GraphQL */ `
  query ListPriceTable1s(
    $price: String
    $filter: ModelPriceTable1FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPriceTable1s(
      price: $price
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
export const getPriceTable2 = /* GraphQL */ `
  query GetPriceTable2($itemname: String!) {
    getPriceTable2(itemname: $itemname) {
      id
      itemname
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPriceTable2s = /* GraphQL */ `
  query ListPriceTable2s(
    $itemname: String
    $filter: ModelPriceTable2FilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPriceTable2s(
      itemname: $itemname
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
export const getFeedback = /* GraphQL */ `
  query GetFeedback($id: ID!) {
    getFeedback(id: $id) {
      id
      name
      email
      message
      file {
        bucket
        key
        region
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFeedbacks = /* GraphQL */ `
  query ListFeedbacks(
    $filter: ModelFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
