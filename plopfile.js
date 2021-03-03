module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.js',
        templateFile: './development-tools/plop-templates/component/component.js',
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.styles.js',
        templateFile: './development-tools/plop-templates/component/styles.js',
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/index.js',
        templateFile: './development-tools/plop-templates/component/index.js',
      },
    ],
  });
  plop.setGenerator('model', {
    description: 'Generate action, api, saga, reducer and selector',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of model(singular, camelCase): ',
      },
      {
        type: 'input',
        name: 'uppercase',
        message: 'UPPERCASE: ',
      },
      {
        type: 'input',
        name: 'camelCaseName',
        message: 'camelCase: ',
      },
      {
        type: 'input',
        name: 'PascalCase',
        message: 'PascalCase: ',
      },
      {
        type: 'input',
        name: 'lowercase',
        message: 'lowercase: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/actions/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/action.js',
      },
      {
        type: 'add',
        path: 'app/apis/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/api.js',
      },
      {
        type: 'add',
        path: 'app/constants/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/constant.js',
      },
      {
        type: 'add',
        path: 'app/models/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/model.js',
      },
      {
        type: 'add',
        path: 'app/reducers/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/reducer.js',
      },
      {
        type: 'add',
        path: 'app/sagas/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/saga.js',
      },
      {
        type: 'add',
        path: 'app/selectors/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/selector.js',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Generate a screen component set',
    prompts: [
      {
        type: 'input',
        name: 'camelCaseName',
        message: 'Name of screen in camelCase: ',
      },
      {
        type: 'input',
        name: 'PascalCase',
        message: 'Name of screen in PascaCase: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/screens/{{PascalCase}}/{{PascalCase}}.js',
        templateFile: './development-tools/plop-templates/screen/component.js',
      },
      {
        type: 'add',
        path: 'app/screens/{{PascalCase}}/{{PascalCase}}.styles.js',
        templateFile: './development-tools/plop-templates/screen/styles.js',
      },
      {
        type: 'add',
        path: 'app/screens/{{PascalCase}}/index.js',
        templateFile: './development-tools/plop-templates/screen/index.js',
      },
    ],
  });
};
