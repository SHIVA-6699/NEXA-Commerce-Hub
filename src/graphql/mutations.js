/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrderdetails = /* GraphQL */ `
  mutation CreateOrderdetails(
    $input: CreateOrderdetailsInput!
    $condition: ModelOrderdetailsConditionInput
  ) {
    createOrderdetails(input: $input, condition: $condition) {
      id
      address
      orders
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrderdetails = /* GraphQL */ `
  mutation UpdateOrderdetails(
    $input: UpdateOrderdetailsInput!
    $condition: ModelOrderdetailsConditionInput
  ) {
    updateOrderdetails(input: $input, condition: $condition) {
      id
      address
      orders
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrderdetails = /* GraphQL */ `
  mutation DeleteOrderdetails(
    $input: DeleteOrderdetailsInput!
    $condition: ModelOrderdetailsConditionInput
  ) {
    deleteOrderdetails(input: $input, condition: $condition) {
      id
      address
      orders
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPriceTable = /* GraphQL */ `
  mutation CreatePriceTable(
    $input: CreatePriceTableInput!
    $condition: ModelPriceTableConditionInput
  ) {
    createPriceTable(input: $input, condition: $condition) {
      id
      itemname
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePriceTable = /* GraphQL */ `
  mutation UpdatePriceTable(
    $input: UpdatePriceTableInput!
    $condition: ModelPriceTableConditionInput
  ) {
    updatePriceTable(input: $input, condition: $condition) {
      id
      itemname
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePriceTable = /* GraphQL */ `
  mutation DeletePriceTable(
    $input: DeletePriceTableInput!
    $condition: ModelPriceTableConditionInput
  ) {
    deletePriceTable(input: $input, condition: $condition) {
      id
      itemname
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
