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

/**
 * @class
 * Initializes a new instance of the JobPreparationAndReleaseTaskExecutionInformation class.
 * @constructor
 * @summary The status of the Job Preparation and Job Release tasks on a
 * compute node.
 *
 * @member {string} [poolId] The id of the pool containing the compute node to
 * which this entry refers.
 * 
 * @member {string} [nodeId] The id of the compute node to which this entry
 * refers.
 * 
 * @member {string} [nodeUrl] The URL of the compute node to which this entry
 * refers.
 * 
 * @member {object} [jobPreparationTaskExecutionInfo] Information about the
 * execution status of the Job Preparation task on this compute node.
 * 
 * @member {date} [jobPreparationTaskExecutionInfo.startTime] Note that every
 * time the task is restarted, this value is updated.
 * 
 * @member {date} [jobPreparationTaskExecutionInfo.endTime] This property is
 * set only if the task is in the Completed state.
 * 
 * @member {string} [jobPreparationTaskExecutionInfo.state] Possible values
 * include: 'running', 'completed'
 * 
 * @member {string} [jobPreparationTaskExecutionInfo.taskRootDirectory]
 * 
 * @member {string} [jobPreparationTaskExecutionInfo.taskRootDirectoryUrl]
 * 
 * @member {number} [jobPreparationTaskExecutionInfo.exitCode] This property
 * is set only if the task is in the Completed state.
 * 
 * @member {object} [jobPreparationTaskExecutionInfo.schedulingError]
 * 
 * @member {string} [jobPreparationTaskExecutionInfo.schedulingError.category]
 * Possible values include: 'usererror', 'servererror', 'unmapped'
 * 
 * @member {string} [jobPreparationTaskExecutionInfo.schedulingError.code]
 * 
 * @member {string} [jobPreparationTaskExecutionInfo.schedulingError.message]
 * 
 * @member {array} [jobPreparationTaskExecutionInfo.schedulingError.details]
 * 
 * @member {number} [jobPreparationTaskExecutionInfo.retryCount]
 * 
 * @member {date} [jobPreparationTaskExecutionInfo.lastRetryTime] This
 * property is set only if the task was retried (i.e. retryCount is nonzero).
 * 
 * @member {object} [jobReleaseTaskExecutionInfo] Information about the
 * execution status of the Job Release task on this compute node. This
 * property is set only if the Job Release task has run on the node.
 * 
 * @member {date} [jobReleaseTaskExecutionInfo.startTime]
 * 
 * @member {date} [jobReleaseTaskExecutionInfo.endTime] This property is set
 * only if the task is in the Completed state.
 * 
 * @member {string} [jobReleaseTaskExecutionInfo.state] Possible values
 * include: 'running', 'completed'
 * 
 * @member {string} [jobReleaseTaskExecutionInfo.taskRootDirectory]
 * 
 * @member {string} [jobReleaseTaskExecutionInfo.taskRootDirectoryUrl]
 * 
 * @member {number} [jobReleaseTaskExecutionInfo.exitCode]  This property is
 * set only if the task is in the Completed state.
 * 
 * @member {object} [jobReleaseTaskExecutionInfo.schedulingError]
 * 
 * @member {string} [jobReleaseTaskExecutionInfo.schedulingError.category]
 * Possible values include: 'usererror', 'servererror', 'unmapped'
 * 
 * @member {string} [jobReleaseTaskExecutionInfo.schedulingError.code]
 * 
 * @member {string} [jobReleaseTaskExecutionInfo.schedulingError.message]
 * 
 * @member {array} [jobReleaseTaskExecutionInfo.schedulingError.details]
 * 
 */
function JobPreparationAndReleaseTaskExecutionInformation() {
}

/**
 * Defines the metadata of JobPreparationAndReleaseTaskExecutionInformation
 *
 * @returns {object} metadata of JobPreparationAndReleaseTaskExecutionInformation
 *
 */
JobPreparationAndReleaseTaskExecutionInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JobPreparationAndReleaseTaskExecutionInformation',
    type: {
      name: 'Composite',
      className: 'JobPreparationAndReleaseTaskExecutionInformation',
      modelProperties: {
        poolId: {
          required: false,
          serializedName: 'poolId',
          type: {
            name: 'String'
          }
        },
        nodeId: {
          required: false,
          serializedName: 'nodeId',
          type: {
            name: 'String'
          }
        },
        nodeUrl: {
          required: false,
          serializedName: 'nodeUrl',
          type: {
            name: 'String'
          }
        },
        jobPreparationTaskExecutionInfo: {
          required: false,
          serializedName: 'jobPreparationTaskExecutionInfo',
          type: {
            name: 'Composite',
            className: 'JobPreparationTaskExecutionInformation'
          }
        },
        jobReleaseTaskExecutionInfo: {
          required: false,
          serializedName: 'jobReleaseTaskExecutionInfo',
          type: {
            name: 'Composite',
            className: 'JobReleaseTaskExecutionInformation'
          }
        }
      }
    }
  };
};

module.exports = JobPreparationAndReleaseTaskExecutionInformation;
