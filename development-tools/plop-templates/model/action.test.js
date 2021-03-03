import expect from 'expect';
import {
  fetch{{PascalCase}},
  fetch{{PascalCase}}Success,
  fetch{{PascalCase}}Failure,
  fetch{{PascalCase}}s,
  fetch{{PascalCase}}sSuccess,
  fetch{{PascalCase}}sFailure,
  save{{PascalCase}},
  save{{PascalCase}}Failure,
  save{{PascalCase}}Success,
  updateActive{{PascalCase}},
  resetActive{{PascalCase}},
  delete{{PascalCase}},
  delete{{PascalCase}}Success,
  delete{{PascalCase}}Failure,
} from './{{camelCaseName}}';
import {
  FETCH_{{uppercase}},
  FETCH_{{uppercase}}_SUCCESS,
  FETCH_{{uppercase}}_FAILURE,
  FETCH_{{uppercase}}S,
  FETCH_{{uppercase}}S_SUCCESS,
  FETCH_{{uppercase}}S_FAILURE,
  SAVE_{{uppercase}},
  SAVE_{{uppercase}}_SUCCESS,
  SAVE_{{uppercase}}_FAILURE,
  UPDATE_ACTIVE_{{uppercase}},
  RESET_ACTIVE_{{uppercase}},
  DELETE_{{uppercase}},
  DELETE_{{uppercase}}_SUCCESS,
  DELETE_{{uppercase}}_FAILURE,
} from '../constants/{{camelCaseName}}';

describe('appActionCreators', () => {
  it('should return a fetch{{PascalCase}} action', () => {
    expect(fetch{{PascalCase}}('123')).toEqual({
      type: FETCH_{{uppercase}},
      {{camelCaseName}}Id: '123',
    });
  });
  it('should return a loadAppSuccessAction with an app object', () => {
    expect(fetch{{PascalCase}}Success({})).toEqual({
      type: FETCH_{{uppercase}}_SUCCESS,
      {{camelCaseName}}: {},
    });
  });
  it('should return a loadAppSuccessAction with an app object', () => {
    expect(fetch{{PascalCase}}Failure(new Error('Something went wrong'))).toEqual({
      type: FETCH_{{uppercase}}_FAILURE,
      errors: new Error('Something went wrong'),
    });
  });
  it('should return a fetch{{PascalCase}}s action', () => {
    expect(fetch{{PascalCase}}s({})).toEqual({
      type: FETCH_{{uppercase}}S,
      options: {},
    });
  });
  it('should return a fetch{{PascalCase}}sSuccess action with response object', () => {
    expect(fetch{{PascalCase}}sSuccess({})).toEqual({
      type: FETCH_{{uppercase}}S_SUCCESS,
      response: {},
    });
  });
  it('should return a fetch{{PascalCase}}Failure action with errors', () => {
    expect(fetch{{PascalCase}}sFailure(new Error('Something went wrong'))).toEqual({
      type: FETCH_{{uppercase}}S_FAILURE,
      errors: new Error('Something went wrong'),
    });
  });
  it('should return a save{{PascalCase}}s action', () => {
    expect(save{{PascalCase}}({})).toEqual({
      type: SAVE_{{uppercase}},
      {{camelCaseName}}: {},
    });
  });
  it('should return a save{{PascalCase}}sSuccess action with response object', () => {
    expect(save{{PascalCase}}Success({})).toEqual({
      type: SAVE_{{uppercase}}_SUCCESS,
      {{camelCaseName}}: {},
    });
  });
  it('should return a save{{PascalCase}}Failure action with errors', () => {
    expect(save{{PascalCase}}Failure(new Error('Something went wrong'))).toEqual({
      type: SAVE_{{uppercase}}_FAILURE,
      errors: new Error('Something went wrong'),
    });
  });
  it('should return a updateAtive{{PascalCase}} action with an object', () => {
    expect(updateActive{{PascalCase}}({})).toEqual({
      type: UPDATE_ACTIVE_{{uppercase}},
      {{camelCaseName}}: {},
    });
  });
  it('should return a updateAtive{{PascalCase}} action with an object', () => {
    expect(resetActive{{PascalCase}}()).toEqual({
      type: RESET_ACTIVE_{{uppercase}},
    });
  });
  it('should return a delete{{PascalCase}} action', () => {
    expect(delete{{PascalCase}}(123)).toEqual({
      type: DELETE_{{uppercase}},
      {{camelCaseName}}Id: 123,
    });
  });
  it('should return a delete{{PascalCase}}Success action with response object', () => {
    expect(delete{{PascalCase}}Success()).toEqual({
      type: DELETE_{{uppercase}}_SUCCESS,
    });
  });
  it('should return a delete{{PascalCase}}Failure action with errors', () => {
    expect(delete{{PascalCase}}Failure(new Error('Something went wrong'))).toEqual({
      type: DELETE_{{uppercase}}_FAILURE,
      errors: new Error('Something went wrong'),
    });
  });
});
