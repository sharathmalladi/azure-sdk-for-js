/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Adds the association between the specified developer group with the specified product.
 *
 * @summary Adds the association between the specified developer group with the specified product.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateProductGroup.json
 */
async function apiManagementCreateProductGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const productId = "testproduct";
  const groupId = "templateGroup";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.productGroup.createOrUpdate(
    resourceGroupName,
    serviceName,
    productId,
    groupId
  );
  console.log(result);
}

apiManagementCreateProductGroup().catch(console.error);
