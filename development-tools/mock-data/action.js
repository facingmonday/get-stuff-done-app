module.exports = [
  {
    id: 'action_3732987',
    planId: 'planId1',
    name: 'Say this daily prayer',
    description: 'An action that needs completed once on a 1 unit interval',
    actionTypeId: 'actionTypeIdRecurring',
    intervalId: 1,
    intervalCount: 1,
    tags: [
      {
        id: 'tag1',
        name: 'Daily',
        displayName: 'Daily',
      },
    ],
  },
  {
    id: 'action_3732988',
    planId: 'planId1',
    name: 'Cardio three times per week',
    description: 'An action that needs completed on 3 times in a 7 unit interval',
    actionTypeId: 'actionTypeIdRecurring',
    intervalId: 2,
    intervalCount: 3,
    tags: [
      {
        id: 'tag2',
        name: 'weekly',
        displayName: 'Weekly',
      },
    ],
  },
  {
    id: 'action_3732989',
    planId: 'planId1',
    name: 'Call mom every wednesday',
    description: 'An action that needs completed once on the second unit of the interval',
    actionTypeId: 'actionTypeIdRecurring',
    intervalId: 3,
    intervalCount: 1,
    intervalSpecifics: [3],
    tags: [],
  },
  {
    id: 'action_3732990',
    planId: 'planId1',
    name: 'Attend bible study every monday, wednesday, and Friday',
    description: 'An action that needs completed on the 2nd, 4th, and 6th unit of the 7 unit interval',
    actionTypeId: 'actionTypeIdRecurring',
    intervalId: 2,
    intervalCount: 3,
    intervalSpecifics: [1, 3, 5],
  },
  {
    id: 'action_3732991',
    planId: 'planId1',
    name: 'Learn how to make bread.',
    description: 'An action that needs completed by the end of the plan',
    actionTypeId: 'actionTypeIdOneTime', // one-time
    intervalId: null,
    intervalCount: null,
    intervalSpecifics: null,
  },
];

/**
 * type - (one_time, recurring)
 * intervalLength - How often the action occurs for a given time period.
 *   For example, 1 would be a daily action. 7 would be weekly.
 *   A null value represents an action that lasts the duration of the product
 * intervalCount - The number of times in the interval that the action should fire
 * intervalSpecifics - Specific interval it should fire on
 */
