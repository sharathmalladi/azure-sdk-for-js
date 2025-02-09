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
 * This sample demonstrates how to Deletes the schema configuration at the Api.
 *
 * @summary Deletes the schema configuration at the Api.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteApiSchema.json
 */
async function apiManagementDeleteApiSchema() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "59d5b28d1f7fab116c282650";
  const schemaId = "59d5b28e1f7fab116402044e";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiSchema.delete(
    resourceGroupName,
    serviceName,
    apiId,
    schemaId,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteApiSchema().catch(console.error);
