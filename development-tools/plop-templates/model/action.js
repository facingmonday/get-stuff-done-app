import {
  FETCH_{{uppercase}}S,
  FETCH_{{uppercase}},
  CREATE_{{uppercase}},
  SAVE_{{uppercase}},
  UPDATE_{{uppercase}},
  DELETE_{{uppercase}},
} from '../constants/{{camelCaseName}}';

export const fetch{{PascalCase}}s = (options) => ({
  type: FETCH_{{uppercase}}S,
  options,
});

export const fetch{{PascalCase}} = ({{camelCaseName}}Id) => ({
  type: FETCH_{{uppercase}},
  {{camelCaseName}}Id,
});

export const create{{PascalCase}} = ({{camelCaseName}}) => ({
  type: CREATE_{{uppercase}},
  {{camelCaseName}},
});

export const save{{PascalCase}} = ({{camelCaseName}}) => ({
  type: SAVE_{{uppercase}},
  {{camelCaseName}},
});

export const update{{PascalCase}} = ({{camelCaseName}}) => ({
  type: UPDATE_{{uppercase}},
  {{camelCaseName}},
});

export const delete{{PascalCase}} = ({{camelCaseName}}) => ({
  type: DELETE_{{uppercase}},
  {{camelCaseName}},
});
