const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const assert = require('assert');
const uuid = require('uuid');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// mock data
const actions = require('./development-tools/mock-data/action');
const actionTypes = require('./development-tools/mock-data/actionType');
const contents = require('./development-tools/mock-data/content');
const contentTypes = require('./development-tools/mock-data/contentType');
const customers = require('./development-tools/mock-data/stripeCustomer');
const completedActions = require('./development-tools/mock-data/completedAction');
const form = require('./development-tools/mock-data/form');
const intervals = require('./development-tools/mock-data/interval');
const occuranceTypes = require('./development-tools/mock-data/occuranceType');
const plans = require('./development-tools/mock-data/plan');
const planTypes = require('./development-tools/mock-data/planType');
const prices = require('./development-tools/mock-data/stripePrice');
const products = require('./development-tools/mock-data/stripeProduct');
const subscriptions = require('./development-tools/mock-data/subscription');
const tags = require('./development-tools/mock-data/tag');
const users = require('./development-tools/mock-data/user');

app.use(
  cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

/**
 * Authentication
 */
app.get('/api/v1/account/login', (req, res) => res.json({
  user: {
    id: '2ofnoi2nfeoifiofo2n',
    stripe_customer_id: 'cus_InD6MODH9LBA75',
    name: 'Test User',
    email: 'test@test.com',
    categories: ['123', '456', '789'],
  },
  token: 'dfhafoiaudfalksfhalkdf',
}));

app.post('/api/v1/account/login', (req, res) => res.json({
  user: {
    id: '2ofnoi2nfeoifiofo2n',
    stripe_customer_id: 'cus_InD6MODH9LBA75',
    name: 'Test User',
    email: 'test@test.com',
    categories: ['123', '456', '789'],
  },
  token: 'dfhafoiaudfalksfhalkdf',
}));

app.post('/api/v1/register', (req, res) => res.json({
  user: {
    id: '2ofnoi2nfeoifiofo2n',
    stripe_customer_id: 'cus_InD6MODH9LBA75',
    name: 'Test User',
    email: 'test@test.com',
    categories: ['123', '456', '789'],
  },
  token: 'dfhafoiaudfalksfhalkdf',
}));

/**
 * Users
 */
app.get('/api/v1/users', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: users,
  },
}));
app.get('/api/v1/users/:id', (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/users', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/users/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/users/:id', (req, res) => res.sendStatus(202));

/** Add More Routes here using mc_server_api */

/**
 * Categories
 */
app.get('/api/v1/categorys', (req, res) => res.status(200).json({
  error: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: [{
      id: '324u',
      name: 'Religon',
    }],
  },
}));
app.get('/api/v1/categorys/:id', (req, res) => {
  res.status(200).json({});
});
app.post('/api/v1/categorys', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/categorys/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/categorys/:id', (req, res) => res.sendStatus(202));

/**
 * Roles
 */
app.get('/api/v1/roles', (req, res) => res.status(200).json({
  offset: 0,
  limit: 100,
  sort: [],
  searchTerm: null,
  filter: [],
  total: 29823,
  results: [],
}));
app.get('/api/v1/roles/:id', (req, res) => {
  res.status(200).json({});
});
app.post('/api/v1/roles', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/roles/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/roles/:id', (req, res) => res.sendStatus(202));

/**
 * Actions
 */

app.get('/api/v1/actions', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: actions,
  },
}));
app.get('/api/v1/actions/:id', (req, res) => {
  const action = actions.find((a) => a.id == req.params.id);
  if (action) {
    res.status(200).json(action);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/actions', (req, res) => {
  res.status(201).json({
    ...req.body,
    id: uuid.v1(),
  });
});
app.put('/api/v1/actions/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/actions/:id', (req, res) => res.sendStatus(202));

/**
 * ActionTypes
 */
app.get('/api/v1/actionTypes', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: actionTypes,
  },
}));
app.get('/api/v1/actionTypes/:id', (req, res) => {
  const actionType = actionType.find((a) => a.id == req.params.id);
  if (actionType) {
    res.status(200).json(actionType);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/actionTypes', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/actionTypes/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/actionTypes/:id', (req, res) => res.sendStatus(202));

/**
 * Products
 */
app.get('/api/v1/products', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 2,
    results: products,
  },
}));
app.get('/api/v1/products/:id', (req, res) => {
  const product = products.filter((p) => p.id === req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/products', (req, res) => {
  try {
    assert(req.body.name).isNotNull();
    res.status(201).json({
      ...req.body,
      id: uuid.v1(),
    });
  } catch (e) {
    console.log('e', e);
    res.sendStatus(500);
  }
});
app.put('/api/v1/products/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/products/:id', (req, res) => res.sendStatus(202));

/**
 * Prices
 */
app.get('/api/v1/prices', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 2,
    results: prices,
  },
}));
app.get('/api/v1/prices/:id', (req, res) => {
  const price = prices.find((price) => price.id == req.params.id);
  if (price) {
    res.status(200).json(price);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/prices', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/prices/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/prices/:id', (req, res) => res.sendStatus(202));

/**
 * Subscriptions
 */
app.get('/api/v1/subscriptions', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: subscriptions,
  },
}));
app.get('/api/v1/subscriptions/:id', (req, res) => {
  const subscription = subscriptions.filter((s) => s.id === req.params.id);
  if (subscription) {
    res.status(200).json(subscription);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/subscriptions', (req, res) => {
  res.status(201).json({
    ...req.body,
    createdOn: new Date(),
    status: 'active',
    id: uuid.v1(),
  });
});
app.put('/api/v1/subscriptions/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/subscriptions/:id', (req, res) => res.sendStatus(202));

/**
 * Completed Actions
 */
app.get('/api/v1/completedActions', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: completedActions,
  },
}));
app.get('/api/v1/completedActions/:id', (req, res) => {
  const completedAction = completedActions.filter((s) => s.id === req.params.id);
  if (completedAction) {
    res.status(200).json(completedAction);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/completedActions', (req, res) => {
  try {
    // assert(req.body.userId).isNotNull();
    // assert(req.body.actionId).isNotNull();
    res.status(201).json({
      errors: null,
      data: {
        ...req.body,
        createdDate: new Date(),
        id: uuid.v1(),
      },
    });
  } catch (e) {
    res.sendStatus(500);
  }
});
app.put('/api/v1/completedActions/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/completedActions/:id', (req, res) => res.sendStatus(202));

app.get('/api/v1/plans', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: plans,
  },
}));
app.get('/api/v1/plans/:id', (req, res) => {
  const plan = plans.filter((s) => s.id === req.params.id);
  if (plan) {
    res.status(200).json(plan);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/plans', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/plans/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/plans/:id', (req, res) => res.sendStatus(202));

app.get('/api/v1/planTypes', (req, res) => res.status(200).json({
  offset: 0,
  limit: 100,
  sort: [],
  searchTerm: null,
  filter: [],
  total: 29823,
  results: planTypes,
}));
app.get('/api/v1/planTypes/:id', (req, res) => {
  const planType = planTypes.filter((s) => s.id === req.params.id);
  if (planType) {
    res.status(200).json(planType);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/planTypes', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/planTypes/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/planTypes/:id', (req, res) => res.sendStatus(202));

app.get('/api/v1/contents', (req, res) => res.status(200).json({
  offset: 0,
  limit: 100,
  sort: [],
  searchTerm: null,
  filter: [],
  total: 29823,
  results: contents,
}));
app.get('/api/v1/contents/:id', (req, res) => {
  const content = contents.filter((s) => s.id === req.params.id);
  if (content) {
    res.status(200).json(content);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/contents', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/contents/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/contents/:id', (req, res) => res.sendStatus(202));

app.get('/api/v1/contentTypes', (req, res) => res.status(200).json({
  offset: 0,
  limit: 100,
  sort: [],
  searchTerm: null,
  filter: [],
  total: 29823,
  results: contentTypes,
}));
app.get('/api/v1/contentTypes/:id', (req, res) => {
  const contentType = contentTypes.filter((s) => s.id === req.params.id);
  if (contentType) {
    res.status(200).json(contentType);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/contentTypes', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/contentTypes/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/contentTypes/:id', (req, res) => res.sendStatus(202));

/**
 * Tags
 */
app.get('/api/v1/tags', (req, res) => res.status(200).json({
  offset: 0,
  limit: 100,
  sort: [],
  searchTerm: null,
  filter: [],
  total: 29823,
  results: tags,
}));
app.get('/api/v1/tags/:id', (req, res) => {
  const theTags = tags.filter((s) => s.id === req.params.id);
  if (theTags) {
    res.status(200).json(theTags);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/tags', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/tags/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/tags/:id', (req, res) => res.sendStatus(202));

app.get('/api/v1/intervals', (req, res) => res.status(200).json({
  errors: null,
  data: {
    offset: 0,
    limit: 100,
    sort: [],
    searchTerm: null,
    filter: [],
    total: 29823,
    results: intervals,
  },
}));
app.get('/api/v1/intervals/:id', (req, res) => {
  const interval = intervals.filter((s) => s.id === req.params.id);
  if (interval) {
    res.status(200).json(interval);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/intervals', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/intervals/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/intervals/:id', (req, res) => res.sendStatus(202));

/**
 * Occurance Types
 */
app.get('/api/v1/occuranceTypes', (req, res) => res.status(200).json({
  offset: 0,
  limit: 100,
  sort: [],
  searchTerm: null,
  filter: [],
  total: 29823,
  results: occuranceTypes,
}));
app.get('/api/v1/occuranceTypes/:id', (req, res) => {
  const occuranceType = occuranceTypes.filter((s) => s.id === req.params.id);
  if (occuranceType) {
    res.status(200).json(occuranceType);
  } else {
    res.sendStatus(404);
  }
});
app.post('/api/v1/occuranceTypes', (req, res) => {
  res.sendStatus(200);
});
app.put('/api/v1/occuranceTypes/:id', (req, res) => res.sendStatus(204));
app.delete('/api/v1/occuranceTypes/:id', (req, res) => res.sendStatus(202));
/**
 * App
 */
app.listen(process.env.SERVER_PORT || 3030, () => {
  console.log(`Dev API is running on port ${process.env.SERVER_PORT || 3030}...`); // eslint-disable-line
});

module.exports = app;
