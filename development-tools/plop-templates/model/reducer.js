import {
  FETCH_{{uppercase}}S,
  FETCH_{{uppercase}}S_SUCCESS,
  FETCH_{{uppercase}}S_FAILURE,
  RESET_{{uppercase}}S,
  FETCH_{{uppercase}},
  FETCH_{{uppercase}}_SUCCESS,
  FETCH_{{uppercase}}_FAILURE,
  SAVE_{{uppercase}},
  SAVE_{{uppercase}}_SUCCESS,
  SAVE_{{uppercase}}_FAILURE,
  UPDATE_ACTIVE_{{uppercase}},
  RESET_ACTIVE_{{uppercase}},
  DELETE_{{uppercase}},
  DELETE_{{uppercase}}_SUCCESS,
  DELETE_{{uppercase}}_FAILURE,
  RESET_DELETED_{{uppercase}},
  ADD_{{uppercase}}_TO_BY_ID,
} from '../constants/{{camelCaseName}}';
import { RESET } from '../constants/auth';

const initialState = {
  {{camelCaseName}}s: {
    errors: [],
    loading: false,
    offset: 0,
    limit: 0,
    sort: [],
    searchTerm: '',
    filters: [],
    total: 0,
    results: [],
  },
  byId: {},
  active{{PascalCase}}: {
    {{camelCaseName}}: {},
    errors: [],
    loading: false,
  },
  new{{PascalCase}}: {
    {{camelCaseName}}: null,
    errors: [],
    loading: false,
  },
  delete{{PascalCase}}: {
    {{camelCaseName}}: null,
    errors: [],
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_{{uppercase}}S:
      return {
        ...state,
        {{camelCaseName}}s: {
          ...state.{{camelCaseName}}s,
          ...action.options,
          loading: true,
        },
      };
    case FETCH_{{uppercase}}S_SUCCESS:
      return {
        ...state,
        {{camelCaseName}}s: {
          results: action.response.results,
          errors: [],
          loading: false,
          offset: action.response.offset,
          limit: action.response.limit,
          sort: action.response.sort,
          searchTerm: action.response.searchTerm,
          filters: action.response.filters,
          total: action.response.total,
        },
        byId: {
          ...state.byId,
          ...action.response.results.reduce((prev, curr) => ({ ...prev, [curr.{{camelCaseName}}Id]: curr }), {}),
        },
      };
    case FETCH_{{uppercase}}S_FAILURE:
      return {
        ...state,
        {{camelCaseName}}s: {
          ...initialState.{{camelCaseName}}s,
          loading: false,
          errors: action.errors,
        },
      };
    case RESET_{{uppercase}}S:
      return {
        ...state,
        {{camelCaseName}}s: initialState.{{camelCaseName}}s,
      };
    case FETCH_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: { ...initialState.active{{PascalCase}}, loading: true },
      };
    case FETCH_{{uppercase}}_SUCCESS:
      return {
        ...state,
        active{{PascalCase}}: {
          {{camelCaseName}}: action.{{camelCaseName}},
          errors: [],
          loading: false,
        },
        byId: {
          ...state.byId,
          [action.{{camelCaseName}}.{{camelCaseName}}Id]: action.{{camelCaseName}},
        },
      };
    case FETCH_{{uppercase}}_FAILURE:
      return {
        ...state,
        active{{PascalCase}}: {
          ...initialState.active{{PascalCase}},
          loading: false,
          errors: action.errors,
        },
      };
    case ADD_{{uppercase}}_TO_BY_ID:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.{{camelCaseName}}.{{camelCaseName}}Id]: action.{{camelCaseName}},
        },
      };
    case SAVE_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: {
          ...state.active{{PascalCase}},
          loading: true,
          errors: [],
        },
      };
    case SAVE_{{uppercase}}_SUCCESS:
      return {
        ...state,
        active{{PascalCase}}: {
          {{camelCaseName}}: action.{{camelCaseName}},
          loading: false,
          errors: [],
        },
      };
    case SAVE_{{uppercase}}_FAILURE:
      return {
        ...state,
        active{{PascalCase}}: {
          ...state.active{{PascalCase}},
          loading: false,
          errors: action.errors,
        },
      };
    case UPDATE_ACTIVE_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: {
          ...state.active{{PascalCase}},
          {{camelCaseName}}: { ...state.active{{PascalCase}}.{{camelCaseName}}, ...action.{{camelCaseName}} },
        },
      };
    case RESET_ACTIVE_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: initialState.active{{PascalCase}},
      };
    case DELETE_{{uppercase}}:
      return {
        ...state,
        delete{{PascalCase}}: {
          {{camelCaseName}}: action.{{camelCaseName}},
          loading: true,
        },
      };
    case DELETE_{{uppercase}}_SUCCESS:
      return {
        ...state,
        delete{{PascalCase}}: {
          ...state.delete{{PascalCase}},
          loading: false,
        },
      };
    case DELETE_{{uppercase}}_FAILURE:
      return {
        ...state,
        delete{{PascalCase}}: {
          ...initialState.delete{{PascalCase}},
          errors: action.errors,
        },
      };
    case RESET_DELETED_{{uppercase}}:
      return {
        ...state,
        delete{{PascalCase}}: {
          ...initialState.delete{{PascalCase}},
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
