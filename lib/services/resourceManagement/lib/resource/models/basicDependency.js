/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BasicDependency class.
 * @constructor
 * Deployment dependency information.
 * @member {string} [id] Gets or sets the ID of the dependency.
 * 
 * @member {string} [resourceType] Gets or sets the dependency resource type.
 * 
 * @member {string} [resourceName] Gets or sets the dependency resource name.
 * 
 */
function BasicDependency() {
}

/**
 * Defines the metadata of BasicDependency
 *
 * @returns {object} metadata of BasicDependency
 *
 */
BasicDependency.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BasicDependency',
    type: {
      name: 'Composite',
      className: 'BasicDependency',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        resourceType: {
          required: false,
          serializedName: 'resourceType',
          type: {
            name: 'String'
          }
        },
        resourceName: {
          required: false,
          serializedName: 'resourceName',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BasicDependency;