import { createSelector } from 'reselect';
import { createSelector as createORMSelector } from 'redux-orm';
import orm from '../store/orm';

// ORM Selectors
export const selectAll{{PascalCase}}s = createORMSelector(orm, (session) => session.{{PascalCase}}.all().toRefArray());
export const select{{PascalCase}}ById = (id) => createORMSelector(orm, (session) => session.{{PascalCase}}.withId(id));