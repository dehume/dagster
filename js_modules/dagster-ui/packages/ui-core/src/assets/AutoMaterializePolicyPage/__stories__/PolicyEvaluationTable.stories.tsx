import * as React from 'react';

import {PolicyEvaluationTable} from '../PolicyEvaluationTable';
import {
  AssetConditionEvaluationStatus,
  PartitionedAssetConditionEvaluation,
  UnpartitionedAssetConditionEvaluation,
} from '../types';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Asset Details/Automaterialize/PolicyEvaluationTable',
  component: PolicyEvaluationTable,
};

export const NonPartitioned = () => {
  const evaluation: UnpartitionedAssetConditionEvaluation = {
    __typename: 'UnpartitionedAssetConditionEvaluation' as const,
    description: 'All are true:',
    startTimestamp: 1,
    endTimestamp: 200,
    status: AssetConditionEvaluationStatus.TRUE,
    childEvaluations: [
      {
        __typename: 'UnpartitionedAssetConditionEvaluation' as const,
        description: 'Any are true:',
        startTimestamp: 1,
        endTimestamp: 4,
        status: AssetConditionEvaluationStatus.TRUE,
        childEvaluations: [
          {
            __typename: 'UnpartitionedAssetConditionEvaluation' as const,
            description: 'parent_updated',
            startTimestamp: 1,
            endTimestamp: 2,
            // metadataEntries: [MetadataEntry!]!
            status: AssetConditionEvaluationStatus.TRUE,
            childEvaluations: null,
          },
          {
            __typename: 'UnpartitionedAssetConditionEvaluation' as const,
            description: 'is_missing',
            startTimestamp: 1,
            endTimestamp: 2,
            // metadataEntries: [MetadataEntry!]!
            status: AssetConditionEvaluationStatus.SKIPPED,
            childEvaluations: null,
          },
        ],
      },
      {
        __typename: 'UnpartitionedAssetConditionEvaluation' as const,
        description: 'Not:',
        startTimestamp: 6,
        endTimestamp: 12,
        status: AssetConditionEvaluationStatus.TRUE,
        childEvaluations: [
          {
            __typename: 'UnpartitionedAssetConditionEvaluation' as const,
            description: 'parent_updated',
            startTimestamp: 6,
            endTimestamp: 12,
            // metadataEntries: [MetadataEntry!]!
            status: AssetConditionEvaluationStatus.FALSE,
            childEvaluations: null,
          },
        ],
      },
      {
        __typename: 'UnpartitionedAssetConditionEvaluation' as const,
        description: 'all_parents_up_to_date',
        startTimestamp: 12,
        endTimestamp: 14,
        status: AssetConditionEvaluationStatus.TRUE,
        childEvaluations: null,
      },
      {
        __typename: 'UnpartitionedAssetConditionEvaluation' as const,
        description: 'not_any_parent_missing',
        startTimestamp: 14,
        endTimestamp: 28,
        status: AssetConditionEvaluationStatus.TRUE,
        childEvaluations: null,
      },
    ],
  };

  return <PolicyEvaluationTable rootEvaluation={evaluation} />;
};

export const Partitioned = () => {
  const evaluation: PartitionedAssetConditionEvaluation = {
    __typename: 'PartitionedAssetConditionEvaluation' as const,
    description: 'All are true:',
    startTimestamp: 1,
    endTimestamp: 200,
    numTrue: 0,
    numFalse: 100,
    numSkipped: 0,
    childEvaluations: [
      {
        __typename: 'PartitionedAssetConditionEvaluation' as const,
        description: 'Any are true:',
        startTimestamp: 1,
        endTimestamp: 4,
        numTrue: 30,
        numFalse: 70,
        numSkipped: 0,
        childEvaluations: [
          {
            __typename: 'PartitionedAssetConditionEvaluation' as const,
            description: 'parent_updated',
            startTimestamp: 1,
            endTimestamp: 2,
            // metadataEntries: [MetadataEntry!]!
            numTrue: 30,
            numFalse: 20,
            numSkipped: 50,
            childEvaluations: null,
          },
          {
            __typename: 'PartitionedAssetConditionEvaluation' as const,
            description: 'is_missing',
            startTimestamp: 1,
            endTimestamp: 2,
            // metadataEntries: [MetadataEntry!]!
            numTrue: 0,
            numFalse: 30,
            numSkipped: 70,
            childEvaluations: null,
          },
        ],
      },
      {
        __typename: 'PartitionedAssetConditionEvaluation' as const,
        description: 'Not:',
        startTimestamp: 6,
        endTimestamp: 12,
        numTrue: 30,
        numFalse: 70,
        numSkipped: 0,
        childEvaluations: [
          {
            __typename: 'PartitionedAssetConditionEvaluation' as const,
            description: 'parent_updated',
            startTimestamp: 6,
            endTimestamp: 12,
            // metadataEntries: [MetadataEntry!]!
            numTrue: 80,
            numFalse: 20,
            numSkipped: 0,
            childEvaluations: null,
          },
        ],
      },
      {
        __typename: 'PartitionedAssetConditionEvaluation' as const,
        description: 'all_parents_up_to_date',
        startTimestamp: 12,
        endTimestamp: 14,
        numTrue: 0,
        numFalse: 100,
        numSkipped: 0,
        childEvaluations: null,
      },
      {
        __typename: 'PartitionedAssetConditionEvaluation' as const,
        description: 'not_any_parent_missing',
        startTimestamp: 14,
        endTimestamp: 28,
        numTrue: 0,
        numFalse: 0,
        numSkipped: 100,
        childEvaluations: null,
      },
    ],
  };

  return <PolicyEvaluationTable rootEvaluation={evaluation} />;
};
