// models.js
import {
  Model, fk, many, attr,
} from 'redux-orm';
import { CREATE_{{uppercase}}, UPDATE_{{uppercase}}, REMOVE_{{uppercase}} } from '../constants/{{camelCaseName}}';

class {{PascalCase}} extends Model {
  static reducer(action, {{PascalCase}}Model, session) {
    switch (action.type) {
      case CREATE_{{uppercase}}:
        {{PascalCase}}Model.upsert(action.{{camelCaseName}});
        break;
      case UPDATE_{{uppercase}}:
        {{PascalCase}}Model.withId(action.{{camelCaseName}}.{{camelCaseName}}Id).update({ ...action.{{camelCaseName}}, pending: true });
        break;
      case REMOVE_{{uppercase}}:
        {{PascalCase}}Model.withId(action.{{camelCaseName}}.{{camelCaseName}}Id).update({ deleted: true });
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `{{PascalCase}}: ${this.id}`;
  }

  displayName() {
    return `${this.name}`;
  }
}

{{PascalCase}}.options = {
  idAttribute: 'id',
};
{{PascalCase}}.modelName = '{{PascalCase}}';

// Declare your related fields.
{{PascalCase}}.fields = {
  id: attr(), // non-relational field for any value; optional but highly recommended
  name: attr(),
};

export default {{PascalCase}};
