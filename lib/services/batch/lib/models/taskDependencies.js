/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TaskDependencies class.
 * @constructor
 * @summary Specifies any dependencies of a task. Any task that is explicitly
 * specified or within a dependency range must complete before the dependant
 * task will be scheduled.
 *
 * @member {array} [taskIds] The list of task ids that must complete before
 * this task can be scheduled.
 * 
 * @member {array} [taskIdRanges] The list of task ranges that must complete
 * before this task can be scheduled.
 * 
 */
function TaskDependencies() {
}

/**
 * Defines the metadata of TaskDependencies
 *
 * @returns {object} metadata of TaskDependencies
 *
 */
TaskDependencies.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskDependencies',
    type: {
      name: 'Composite',
      className: 'TaskDependencies',
      modelProperties: {
        taskIds: {
          required: false,
          serializedName: 'taskIds',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        taskIdRanges: {
          required: false,
          serializedName: 'taskIdRanges',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TaskIdRangeElementType',
                type: {
                  name: 'Composite',
                  className: 'TaskIdRange'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = TaskDependencies;
