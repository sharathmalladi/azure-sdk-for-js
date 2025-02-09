/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ResourcePatch,
  ClustersUpdateOptionalParams,
  AzureArcVMwareManagementServiceAPI
} from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to API to update certain properties of the cluster resource.
 *
 * @summary API to update certain properties of the cluster resource.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/UpdateCluster.json
 */
async function updateCluster() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const clusterName = "HRCluster";
  const body: ResourcePatch = { tags: { tag1: "value1", tag2: "value2" } };
  const options: ClustersUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.clusters.update(
    resourceGroupName,
    clusterName,
    options
  );
  console.log(result);
}

updateCluster().catch(console.error);
