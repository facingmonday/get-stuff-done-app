module.exports = [
  {
    id: 'occuranceType1',
    name: 'all',
    displayName: 'All',
  },
  {
    id: 'occuranceType2',
    name: 'sequential',
    displayName: 'All',
  },
  {
    id: 'occuranceType3',
    name: 'random',
    displayName: 'Random',
    hint: 'This content will be displayed randomly untill all have been shown',
  },
  {
    id: 'occuranceType4',
    name: 'specificIntervalOfPlan',
    displayName: 'Specific Interval of Plan',
    hint: 'This content will be displayed randomly untill all have been shown',
  },
  {
    id: 'occuranceType5',
    name: 'specificCountOfInterval',
    displayName: 'Specific Count of Interval',
    hint: 'This content will be displayed randomly untill all have been shown',
  },
];

/**
 * occuranceType
 *  - every: Content will appear for every instance of the action
 *  - sequential: multiple contents per action will appear sequentially
 *  - random:  multiple contents per action will appear randomly
 *  - specificIntervalOfPlan: Ex. If the plan is 30 days and the action interval is
 *      1 and this is set to 4, this content will show on the 4th instance of the action
 *  - specificCountOfInterval: Ex. If the actions intervalLength is 7 and the intervalCount
 *    is 3 and I set specificCountOfInterval to 2, this will show up on the second action.
 *    Ex. Action is cardios three times a week and day 1 is treadmill
 */
